var fluid_2_0_0=fluid_2_0_0||{};!function($,fluid){"use strict";fluid.registerNamespace("fluid.prefs.schemas"),fluid.prefs.schemas.merge=function(target,source){return target||(target={type:"object",properties:{}}),source=source.properties||source,$.extend(!0,target.properties,source),target},fluid.defaults("fluid.prefs.primaryBuilder",{gradeNames:["fluid.component","{that}.buildPrimary"],schemaIndex:{expander:{func:"fluid.indexDefaults",args:["schemaIndex",{gradeNames:"fluid.prefs.schemas",indexFunc:"fluid.prefs.primaryBuilder.defaultSchemaIndexer"}]}},primarySchema:{},typeFilter:[],invokers:{buildPrimary:{funcName:"fluid.prefs.primaryBuilder.buildPrimary",args:["{that}.options.schemaIndex","{that}.options.typeFilter","{that}.options.primarySchema"]}}}),fluid.prefs.primaryBuilder.buildPrimary=function(schemaIndex,typeFilter,primarySchema){var suppliedPrimaryGradeName="fluid.prefs.schemas.suppliedPrimary"+fluid.allocateGuid();fluid.defaults(suppliedPrimaryGradeName,{gradeNames:["fluid.prefs.schemas"],schema:fluid.filterKeys(primarySchema.properties||primarySchema,typeFilter,!1)});var primary=[];return fluid.each(typeFilter,function(type){var schemaGrades=schemaIndex[type];schemaGrades&&primary.push.apply(primary,schemaGrades)}),primary.push(suppliedPrimaryGradeName),primary},fluid.prefs.primaryBuilder.defaultSchemaIndexer=function(defaults){if(defaults.schema)return fluid.keys(defaults.schema.properties)},fluid.defaults("fluid.prefs.schemas",{gradeNames:["fluid.component"],mergePolicy:{schema:fluid.prefs.schemas.merge}})}(jQuery,fluid_2_0_0);