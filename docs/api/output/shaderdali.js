Ext.data.JsonP.shaderdali({"tagname":"class","name":"shaderdali","autodetected":{},"files":[{"filename":"shaderdali.js","href":"shaderdali.html#shaderdali"}],"extends":"shader","members":[{"name":"annotateLines","tagname":"method","owner":"shader","id":"method-annotateLines","meta":{}},{"name":"atExtend","tagname":"method","owner":"shader","id":"method-atExtend","meta":{}},{"name":"compile","tagname":"method","owner":"shader","id":"method-compile","meta":{}},{"name":"compileAttribRename","tagname":"method","owner":"shader","id":"method-compileAttribRename","meta":{}},{"name":"compileAttributes","tagname":"method","owner":"shader","id":"method-compileAttributes","meta":{}},{"name":"compileFunctions","tagname":"method","owner":"shader","id":"method-compileFunctions","meta":{}},{"name":"compileHeader","tagname":"method","owner":"shader","id":"method-compileHeader","meta":{}},{"name":"compileShader","tagname":"method","owner":"shaderdali","id":"method-compileShader","meta":{}},{"name":"compileStructs","tagname":"method","owner":"shader","id":"method-compileStructs","meta":{}},{"name":"compileTextures","tagname":"method","owner":"shader","id":"method-compileTextures","meta":{}},{"name":"compileUniformRename","tagname":"method","owner":"shader","id":"method-compileUniformRename","meta":{}},{"name":"compileUniforms","tagname":"method","owner":"shader","id":"method-compileUniforms","meta":{}},{"name":"compileUse","tagname":"method","owner":"shaderdali","id":"method-compileUse","meta":{}},{"name":"compileVaryings","tagname":"method","owner":"shader","id":"method-compileVaryings","meta":{}},{"name":"decodeBlendEquation","tagname":"method","owner":"shader","id":"method-decodeBlendEquation","meta":{}},{"name":"decodeBlendFactor","tagname":"method","owner":"shader","id":"method-decodeBlendFactor","meta":{}},{"name":"decodeDepthEquation","tagname":"method","owner":"shader","id":"method-decodeDepthEquation","meta":{}},{"name":"decodeStencilEquation","tagname":"method","owner":"shader","id":"method-decodeStencilEquation","meta":{}},{"name":"drawArrays","tagname":"method","owner":"shaderdali","id":"method-drawArrays","meta":{}},{"name":"getLocations","tagname":"method","owner":"shader","id":"method-getLocations","meta":{}},{"name":"isShaderEqual","tagname":"method","owner":"shader","id":"method-isShaderEqual","meta":{}},{"name":"mapAttributes","tagname":"method","owner":"shader","id":"method-mapAttributes","meta":{}},{"name":"mapTextures","tagname":"method","owner":"shaderdali","id":"method-mapTextures","meta":{}},{"name":"mapUniforms","tagname":"method","owner":"shaderdali","id":"method-mapUniforms","meta":{}},{"name":"monitorCompiledProperty","tagname":"method","owner":"shader","id":"method-monitorCompiledProperty","meta":{}},{"name":"position","tagname":"method","owner":"shader","id":"method-position","meta":{}},{"name":"reupdate","tagname":"method","owner":"shader","id":"method-reupdate","meta":{}},{"name":"toVec4","tagname":"method","owner":"shader","id":"method-toVec4","meta":{}},{"name":"useShader","tagname":"method","owner":"shaderdali","id":"method-useShader","meta":{}},{"name":"useShaderTemplate","tagname":"method","owner":"shaderdali","id":"method-useShaderTemplate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-shaderdali","component":false,"superclasses":["shader"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/shader' rel='shader' class='docClass'>shader</a><div class='subclass '><strong>shaderdali</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/shaderdali.html#shaderdali' target='_blank'>shaderdali.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-annotateLines' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-annotateLines' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-annotateLines' class='name expandable'>annotateLines</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-atExtend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-atExtend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-atExtend' class='name expandable'>atExtend</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-compile' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compile' class='name expandable'>compile</a>( <span class='pre'>gldevice</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>compile the shader ...</div><div class='long'><p>compile the shader</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gldevice</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileAttribRename' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileAttribRename' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileAttribRename' class='name expandable'>compileAttribRename</a>( <span class='pre'>vtxattr, pixattr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>vtxattr</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixattr</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileAttributes' class='name expandable'>compileAttributes</a>( <span class='pre'>vtxattr, pixattr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>vtxattr</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixattr</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileFunctions' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileFunctions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileFunctions' class='name expandable'>compileFunctions</a>( <span class='pre'>call, mask</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>call</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>mask</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileHeader' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileHeader' class='name expandable'>compileHeader</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-compileShader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-compileShader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-compileShader' class='name expandable'>compileShader</a>( <span class='pre'>gldevice</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gldevice</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileStructs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileStructs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileStructs' class='name expandable'>compileStructs</a>( <span class='pre'>structs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>structs</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileTextures' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileTextures' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileTextures' class='name expandable'>compileTextures</a>( <span class='pre'>textures</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>textures</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileUniformRename' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileUniformRename' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileUniformRename' class='name expandable'>compileUniformRename</a>( <span class='pre'>uniforms</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uniforms</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileUniforms' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileUniforms' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileUniforms' class='name expandable'>compileUniforms</a>( <span class='pre'>uniforms</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uniforms</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileUse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-compileUse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-compileUse' class='name expandable'>compileUse</a>( <span class='pre'>shader</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>{object} shader DaliShader object, amended with location information\n(see getLocations call above)\nThe 'this' pointer...</div><div class='long'><p>{object} shader DaliShader object, amended with location information\n(see getLocations call above)\nThe 'this' pointer is a view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compileVaryings' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-compileVaryings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-compileVaryings' class='name expandable'>compileVaryings</a>( <span class='pre'>varyings, name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>varyings</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-decodeBlendEquation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-decodeBlendEquation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-decodeBlendEquation' class='name expandable'>decodeBlendEquation</a>( <span class='pre'>eq, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eq</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-decodeBlendFactor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-decodeBlendFactor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-decodeBlendFactor' class='name expandable'>decodeBlendFactor</a>( <span class='pre'>node, key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-decodeDepthEquation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-decodeDepthEquation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-decodeDepthEquation' class='name expandable'>decodeDepthEquation</a>( <span class='pre'>eq, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eq</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-decodeStencilEquation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-decodeStencilEquation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-decodeStencilEquation' class='name expandable'>decodeStencilEquation</a>( <span class='pre'>gl, eq, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eq</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-drawArrays' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-drawArrays' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-drawArrays' class='name expandable'>drawArrays</a>( <span class='pre'>devicegl, sub, start, end</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>lets draw ourselves. ...</div><div class='long'><p>lets draw ourselves.\nA view (the this pointer) makes one call to drawArrays for each shader.\nA typical number is two (one for border and one for hardimage</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>devicegl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>sub</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>start</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>end</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLocations' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-getLocations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-getLocations' class='name expandable'>getLocations</a>( <span class='pre'>gl, shader, vtx_state, pix_state</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>vtx_state</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pix_state</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isShaderEqual' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-isShaderEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-isShaderEqual' class='name expandable'>isShaderEqual</a>( <span class='pre'>prevshader, view, prev</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prevshader</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>view</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>prev</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-mapAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-mapAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-mapAttributes' class='name expandable'>mapAttributes</a>( <span class='pre'>gl, shader, attributes, attrlocs, context</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>attributes</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>attrlocs</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-mapTextures' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-mapTextures' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-mapTextures' class='name expandable'>mapTextures</a>( <span class='pre'>gl, shader, textures, texlocs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>textures</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>texlocs</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/shader-method-mapTextures\" rel=\"shader-method-mapTextures\" class=\"docClass\">shader.mapTextures</a></p></div></div></div><div id='method-mapUniforms' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-mapUniforms' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-mapUniforms' class='name expandable'>mapUniforms</a>( <span class='pre'>gl, shader, uniforms, uniset, unilocs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Override from shader.js (DALI) ...</div><div class='long'><p>Override from shader.js (DALI)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>uniforms</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>uniset</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>unilocs</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/shader-method-mapUniforms\" rel=\"shader-method-mapUniforms\" class=\"docClass\">shader.mapUniforms</a></p></div></div></div><div id='method-monitorCompiledProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-monitorCompiledProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-monitorCompiledProperty' class='name expandable'>monitorCompiledProperty</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-position' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-position' class='name expandable'>position</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-reupdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-reupdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-reupdate' class='name expandable'>reupdate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-toVec4' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/shader' rel='shader' class='defined-in docClass'>shader</a><br/><a href='source/shader.html#shader-method-toVec4' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shader-method-toVec4' class='name expandable'>toVec4</a>( <span class='pre'>str, ast, str2, ast2</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>ast</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>str2</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>ast2</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-useShader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-useShader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-useShader' class='name expandable'>useShader</a>( <span class='pre'>gl, shader</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-useShaderTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='shaderdali'>shaderdali</span><br/><a href='source/shaderdali.html#shaderdali-method-useShaderTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/shaderdali-method-useShaderTemplate' class='name expandable'>useShaderTemplate</a>( <span class='pre'>gl, shader, root</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Template for generated code\n{object} gl stubbed out gl object\n{object} shader compiled shader object, containing dali...</div><div class='long'><p>Template for generated code\n{object} gl stubbed out gl object\n{object} shader compiled shader object, containing dalishader\nand daligeometry. (see compileShader in this file)\n{object} root display object (ex. border, hardrect), containing\ndalimaterial, dalirenderer, daliactor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gl</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>shader</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});