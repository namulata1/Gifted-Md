const _0x791ac3=_0x3c90;(function(_0x58b7c9,_0x429b3b){const _0x41c4d6=_0x3c90,_0x4dadb1=_0x58b7c9();while(!![]){try{const _0x176d6f=parseInt(_0x41c4d6(0x21d))/0x1*(-parseInt(_0x41c4d6(0x28e))/0x2)+parseInt(_0x41c4d6(0x1fd))/0x3*(parseInt(_0x41c4d6(0x276))/0x4)+-parseInt(_0x41c4d6(0x2a4))/0x5+-parseInt(_0x41c4d6(0x2a2))/0x6+-parseInt(_0x41c4d6(0x248))/0x7+parseInt(_0x41c4d6(0x290))/0x8*(parseInt(_0x41c4d6(0x291))/0x9)+parseInt(_0x41c4d6(0x1e2))/0xa;if(_0x176d6f===_0x429b3b)break;else _0x4dadb1['push'](_0x4dadb1['shift']());}catch(_0x3422f7){_0x4dadb1['push'](_0x4dadb1['shift']());}}}(_0x5ad1,0x20c2d));const axios=require(_0x791ac3(0x206)),fs=require('fs-extra'),util=require(_0x791ac3(0x244)),{StickerTypes}=require(_0x791ac3(0x220)),fetch=require(_0x791ac3(0x26f)),{fancytext,smdBuffer,getBuffer,listall,prefix,smd,generateSticker,TelegraPh,Config}=require(_0x791ac3(0x246));let mtypes=['imageMessage',_0x791ac3(0x273),_0x791ac3(0x211)];smd({'cmdname':_0x791ac3(0x28c),'alias':['s'],'info':_0x791ac3(0x1e0),'type':_0x791ac3(0x28c),'filename':__filename,'use':_0x791ac3(0x27e)},async _0x5c0f33=>{const _0x5fc2e0=_0x791ac3;try{let _0x2c7197=mtypes[_0x5fc2e0(0x269)](_0x5c0f33[_0x5fc2e0(0x297)])?_0x5c0f33:_0x5c0f33['reply_message'];if(_0x2c7197&&mtypes[_0x5fc2e0(0x269)](_0x2c7197?.[_0x5fc2e0(0x297)]||'need_Media')){let _0x5d424f=await _0x2c7197['download'](),_0x34b7a9={'pack':Config[_0x5fc2e0(0x234)],'author':Config['author'],'type':StickerTypes[_0x5fc2e0(0x286)],'quality':0xa};return await generateSticker(_0x5c0f33,_0x5d424f,_0x34b7a9),_0x5d424f=![];}else return _0x5c0f33[_0x5fc2e0(0x1e8)](_0x5fc2e0(0x2af));}catch(_0x21737c){return await _0x5c0f33[_0x5fc2e0(0x282)](_0x21737c+'\x0a\x0acmdName:\x20sticker\x0a');}}),smd({'cmdname':'take','info':_0x791ac3(0x1e0),'type':_0x791ac3(0x28c),'filename':__filename,'use':_0x791ac3(0x241)},async(_0x5bfb29,_0x55cb86)=>{const _0x1b711d=_0x791ac3;try{let _0x4a3104=_0x5bfb29[_0x1b711d(0x242)];if(!_0x4a3104||_0x4a3104?.[_0x1b711d(0x297)]!=_0x1b711d(0x211))return await _0x5bfb29['reply']('*Uhh\x20Please,\x20Reply\x20to\x20sticker*');let _0xd604d1=_0x55cb86['split']('|'),_0x2e9e04=_0xd604d1[0x0]?.[_0x1b711d(0x22a)]()!==''?_0xd604d1[0x0]:_0x5bfb29[_0x1b711d(0x22d)],_0x29ecb4=_0xd604d1[0x1]&&_0xd604d1[0x1]!==''?_0xd604d1[0x1]:'ɢɪғᴛᴇᴅ-ᴍᴅ\x20♥️',_0x41b1d0=await _0x4a3104[_0x1b711d(0x254)](),_0x189c18={'pack':_0x2e9e04,'author':_0x29ecb4,'type':StickerTypes[_0x1b711d(0x286)],'quality':0xa};return await generateSticker(_0x5bfb29,_0x41b1d0,_0x189c18),_0x41b1d0=![];}catch(_0x43381f){return await _0x5bfb29[_0x1b711d(0x282)](_0x43381f+'\x0a\x0acmdName:\x20take\x0a');}}),smd({'cmdname':'attp','info':_0x791ac3(0x263),'type':'sticker','filename':__filename,'use':_0x791ac3(0x1ee)},async(_0x38e1bd,_0x156edf)=>{const _0x35eb7d=_0x791ac3;try{let _0xe64c4d=await smdBuffer(_0x35eb7d(0x280)+(_0x156edf?_0x156edf:'Please\x20provide\x20text\x20to\x20generate\x20sticker')+_0x35eb7d(0x29b));return await generateSticker(_0x38e1bd,_0xe64c4d);}catch(_0x2b8c01){return await _0x38e1bd[_0x35eb7d(0x282)](_0x2b8c01+'\x0a\x0acmdName:\x20attp\x0a');}}),smd({'cmdname':_0x791ac3(0x251),'alias':[_0x791ac3(0x23b)],'info':_0x791ac3(0x202),'type':_0x791ac3(0x28c),'filename':__filename,'use':_0x791ac3(0x222)},async _0x3d4f5a=>{const _0x535b5a=_0x791ac3;try{let _0x1b536d=mtypes[_0x535b5a(0x269)](_0x3d4f5a[_0x535b5a(0x297)])?_0x3d4f5a:_0x3d4f5a['reply_message'];if(_0x1b536d&&mtypes[_0x535b5a(0x269)](_0x1b536d?.['mtype']||'need_Media')){let _0x168ad5=await _0x1b536d[_0x535b5a(0x254)](),_0x7fef11={'pack':Config[_0x535b5a(0x234)],'author':Config[_0x535b5a(0x1fe)],'type':StickerTypes[_0x535b5a(0x23e)],'quality':0x32};return await generateSticker(_0x3d4f5a,_0x168ad5,_0x7fef11),_0x168ad5=![];}else return _0x3d4f5a[_0x535b5a(0x1e8)](_0x535b5a(0x217));}catch(_0x5b4f60){return await _0x3d4f5a[_0x535b5a(0x282)](_0x5b4f60+_0x535b5a(0x240),_0x535b5a(0x226));}}),smd({'cmdname':_0x791ac3(0x266),'alias':[_0x791ac3(0x2a6),_0x791ac3(0x27f),'cs'],'info':'circle\x20sticker\x20of\x20image.','type':_0x791ac3(0x28c),'filename':__filename,'use':'<reply\x20to\x20image.>'},async _0x2a0b32=>{const _0x398039=_0x791ac3;try{let _0x388ff2=mtypes[_0x398039(0x269)](_0x2a0b32[_0x398039(0x297)])?_0x2a0b32:_0x2a0b32['reply_message'];if(_0x388ff2&&mtypes[_0x398039(0x269)](_0x388ff2?.[_0x398039(0x297)]||_0x398039(0x26e))){let _0x2abf75=await _0x388ff2[_0x398039(0x254)](),_0x219f78={'pack':Config['packname'],'author':Config[_0x398039(0x1fe)],'type':StickerTypes[_0x398039(0x21a)],'quality':0x32};return await generateSticker(_0x2a0b32,_0x2abf75,_0x219f78),_0x2abf75=![];}else return _0x2a0b32[_0x398039(0x1e8)](_0x398039(0x217));}catch(_0x29a9ea){return await _0x2a0b32[_0x398039(0x282)](_0x29a9ea+'\x0a\x0acmdName:\x20circle\x0a',_0x398039(0x221));}}),smd({'cmdname':'round','alias':[_0x791ac3(0x232),_0x791ac3(0x23d)],'info':_0x791ac3(0x1e0),'type':_0x791ac3(0x28c),'filename':__filename,'use':_0x791ac3(0x222)},async _0x3d057e=>{const _0x2da57c=_0x791ac3;try{let _0x43ba5a=mtypes[_0x2da57c(0x269)](_0x3d057e[_0x2da57c(0x297)])?_0x3d057e:_0x3d057e[_0x2da57c(0x242)];if(_0x43ba5a&&mtypes[_0x2da57c(0x269)](_0x43ba5a?.[_0x2da57c(0x297)]||_0x2da57c(0x26e))){let _0x339708=await _0x43ba5a[_0x2da57c(0x254)](),_0x3505c1={'pack':Config['packname'],'author':Config['author'],'type':StickerTypes['ROUNDED'],'quality':0x32};return await generateSticker(_0x3d057e,_0x339708,_0x3505c1),_0x339708=![];}else return _0x3d057e[_0x2da57c(0x1e8)](_0x2da57c(0x1f8));}catch(_0xc02321){return await _0x3d057e[_0x2da57c(0x282)](_0xc02321+_0x2da57c(0x2a1),_0x2da57c(0x24c));}}),smd({'cmdname':_0x791ac3(0x1fa),'info':'To\x20get\x20Random\x20Pics','type':_0x791ac3(0x23a),'filename':__filename},async _0x9e029b=>{const _0x5133a0=_0x791ac3;try{const _0x15db14=await(await fetch(_0x5133a0(0x1e4)))?.[_0x5133a0(0x1e9)](),_0x28cb70=_0x15db14?.[_0x5133a0(0x1e3)]?.[_0x5133a0(0x22f)]||![];_0x28cb70?await _0x9e029b[_0x5133a0(0x1e7)](_0x9e029b[_0x5133a0(0x239)],{'caption':'*---Random\x20Wallpapers\x20Here---*'},{'quoted':_0x9e029b},_0x5133a0(0x20c),_0x28cb70):await _0x9e029b[_0x5133a0(0x261)](_0x5133a0(0x227));}catch(_0xc62c76){return await _0x9e029b[_0x5133a0(0x282)](_0xc62c76+_0x5133a0(0x2ae));}}),smd({'pattern':'memegen','desc':_0x791ac3(0x230),'category':_0x791ac3(0x28c),'filename':__filename,'use':_0x791ac3(0x288)},async(_0x22ddb6,_0x37beb8)=>{const _0x4e68df=_0x791ac3;try{let _0x86f461=pmtypes[_0x4e68df(0x269)](_0x22ddb6[_0x4e68df(0x297)])?_0x22ddb6:_0x22ddb6['reply_message'];if(!_0x37beb8)return await _0x22ddb6['reply'](_0x4e68df(0x200));if(!_0x86f461||!pmtypes[_0x4e68df(0x269)](_0x86f461['mtype']))return _0x22ddb6[_0x4e68df(0x1e8)](_0x4e68df(0x1f5));let _0x27acb5=_0x37beb8[_0x4e68df(0x281)]('|')[0x0]||'',_0x349d98=(_0x37beb8[_0x4e68df(0x281)]('|')[0x1]||_0x4e68df(0x28c))['toLowerCase'](),_0x9da09b=_0x27acb5[_0x4e68df(0x281)](';')[0x0]||'_',_0x3eca86=_0x27acb5['split'](';')[0x1]||'_',_0x1e34fc=await _0x22ddb6['bot']['downloadAndSaveMediaMessage'](_0x86f461),_0x29ef71=await TelegraPh(_0x1e34fc);try{fs['unlinkSync'](_0x1e34fc);}catch(_0x11c1ab){}console[_0x4e68df(0x262)](_0x4e68df(0x252),_0x37beb8);let _0x498888=await getBuffer(_0x4e68df(0x20e)+_0x9da09b+'/'+_0x3eca86+'.png?background='+_0x29ef71);_0x349d98?.['startsWith']('p')&&await _0x22ddb6[_0x4e68df(0x261)](_0x498888,{'caption':Config[_0x4e68df(0x268)]},_0x4e68df(0x20c));let _0x122c8d={'pack':Config[_0x4e68df(0x234)],'author':Config[_0x4e68df(0x1fe)],'type':StickerTypes[_0x4e68df(0x286)],'quality':0x46};return await generateSticker(_0x22ddb6,_0x498888,_0x122c8d),_0x498888=![];}catch(_0x42f4e4){_0x22ddb6[_0x4e68df(0x282)](_0x42f4e4+_0x4e68df(0x218)),console[_0x4e68df(0x262)](_0x42f4e4);}}),smd({'pattern':_0x791ac3(0x28f),'desc':_0x791ac3(0x295),'category':_0x791ac3(0x28c),'use':_0x791ac3(0x1ff),'filename':__filename},async(_0x33041d,_0x2913f7)=>{const _0x3aef3f=_0x791ac3;try{let _0x21f885=_0x2913f7[_0x3aef3f(0x281)](',')[0x0]||![],_0x44b459=_0x2913f7[_0x3aef3f(0x281)](',')[0x1]||![];if(!_0x2913f7||!_0x21f885||!_0x44b459)return _0x33041d['reply'](_0x3aef3f(0x2a5)+prefix+_0x3aef3f(0x285));const _0x517f7d=await fetch(_0x3aef3f(0x272)+_0x21f885+'_'+_0x44b459),_0x2a31b3=await _0x517f7d?.[_0x3aef3f(0x1e9)]();if(!_0x2a31b3||_0x2a31b3?.[_0x3aef3f(0x1f6)]=='')return _0x33041d[_0x3aef3f(0x261)](_0x3aef3f(0x298));else{let _0x14b656=await smdBuffer(_0x2a31b3[_0x3aef3f(0x238)][0x0]['url']),_0x4203ce={'pack':Config[_0x3aef3f(0x234)],'author':Config['author'],'type':StickerTypes['FULL'],'quality':0x46};return await generateSticker(_0x33041d,_0x14b656,_0x4203ce),_0x14b656=![];}}catch(_0x19f1fa){_0x33041d[_0x3aef3f(0x282)](_0x19f1fa+'\x0a\x0acmdName:\x20emix');}}),smd({'pattern':_0x791ac3(0x2ac),'desc':_0x791ac3(0x2a9),'alias':['q'],'category':_0x791ac3(0x28c),'use':_0x791ac3(0x22e),'filename':__filename},async(_0x3945ec,_0x2bf6df)=>{const _0x3b26bd=_0x791ac3;try{let _0x586a16=_0x3945ec[_0x3b26bd(0x242)]?_0x3945ec[_0x3b26bd(0x242)]:_0x3945ec&&_0x2bf6df?_0x3945ec:![],_0x195d37=_0x3945ec['reply_message']?_0x3945ec[_0x3b26bd(0x242)][_0x3b26bd(0x23f)]:_0x2bf6df;if(!_0x586a16||!_0x195d37)return _0x3945ec[_0x3b26bd(0x1e8)](_0x3b26bd(0x20d));let _0x4ec1eb=await _0x3945ec[_0x3b26bd(0x2ad)](_0x586a16['sender']),_0x1978c4=[_0x3b26bd(0x256),_0x3b26bd(0x1e6)],_0x593ba0=_0x2bf6df===_0x3b26bd(0x260)?_0x1978c4[0x0]:_0x2bf6df==='black'?_0x1978c4[0x1]:_0x1978c4[Math[_0x3b26bd(0x29a)](Math[_0x3b26bd(0x270)]()*_0x1978c4['length'])],_0x25aa85=_0x3945ec['bot'][_0x3b26bd(0x236)](_0x586a16['sender']),_0x5e18e7={'type':_0x3b26bd(0x250),'format':_0x3b26bd(0x275),'backgroundColor':_0x593ba0,'width':0x200,'height':0x200,'scale':0x3,'messages':[{'avatar':!![],'from':{'first_name':_0x25aa85,'language_code':'en','name':_0x25aa85,'photo':{'url':_0x4ec1eb}},'text':_0x195d37,'replyMessage':{}}]},_0x379e01=await axios[_0x3b26bd(0x26a)](_0x3b26bd(0x267),_0x5e18e7);if(!_0x379e01||_0x379e01[_0x3b26bd(0x213)]!==0xc8||!_0x379e01[_0x3b26bd(0x296)]||!_0x379e01['data']['ok'])return await _0x3945ec['send'](_0x3b26bd(0x22b));let _0x51d658=Buffer[_0x3b26bd(0x20b)](_0x379e01[_0x3b26bd(0x296)][_0x3b26bd(0x257)][_0x3b26bd(0x20c)]['length'],_0x379e01[_0x3b26bd(0x296)]['result']['image'],'base64');try{await _0x3945ec[_0x3b26bd(0x261)](_0x51d658,{'packname':Config[_0x3b26bd(0x234)],'author':_0x3b26bd(0x1ed)},_0x3b26bd(0x28c));}catch(_0x40c63b){console[_0x3b26bd(0x262)](_0x3b26bd(0x259),_0x40c63b);let _0x247f4e={'pack':Config[_0x3b26bd(0x234)],'author':Config[_0x3b26bd(0x1fe)],'type':StickerTypes[_0x3b26bd(0x286)],'quality':0x46};return await generateSticker(_0x3945ec,_0x51d658,_0x247f4e);}}catch(_0x59ac72){return await _0x3945ec[_0x3b26bd(0x282)](_0x59ac72+_0x3b26bd(0x1fb),_0x59ac72);}}),smd({'pattern':'fancy','desc':'Makes\x20stylish/fancy\x20given\x20text','category':'converter','use':_0x791ac3(0x229),'filename':__filename},async(_0x581e5e,_0x2fd38b)=>{const _0xd3aee3=_0x791ac3;try{let _0x359d77=_0xd3aee3(0x287)+(_0x2fd38b?_0xd3aee3(0x277):_0xd3aee3(0x29c)+prefix+'fancy\x20Gifted(For\x20all\x20text)\x0a\x09\x09'+prefix+_0xd3aee3(0x1ef)),_0x164e6d=parseInt(_0x2fd38b);if(isNaN(_0x164e6d)){let _0x2f7166=_0x2fd38b?_0x2fd38b:_0xd3aee3(0x23c);listall(_0x2f7166)['forEach']((_0x31316b,_0x44dad0)=>{_0x359d77+='\x0a'+(_0x44dad0+=0x1)+'\x20'+_0x31316b+'\x0a';});try{return await _0x581e5e['send'](_0x359d77,{'caption':_0x359d77},'',msg);}catch{return await _0x581e5e['reply'](_0x359d77);}}let _0x1848c0=await fancytext(''+_0x2fd38b[_0xd3aee3(0x1f3)](0x2),_0x164e6d);return await _0x581e5e[_0xd3aee3(0x261)](_0x1848c0,{},'',_0x581e5e);}catch(_0x1b24b7){return await _0x581e5e['error'](_0x1b24b7+_0xd3aee3(0x25c),_0x1b24b7);}}),smd({'pattern':'styly','desc':_0x791ac3(0x289),'category':'converter','filename':__filename,'use':_0x791ac3(0x1f2)},async(_0x30ecf4,_0x36148d)=>{const _0xd2e0a8=_0x791ac3;try{let _0x54bd19=_0x36148d[_0xd2e0a8(0x22a)](),_0x5522c5=_0xd2e0a8(0x287)+(_0x54bd19?'```🔢Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x20\x0a\x0a':_0xd2e0a8(0x29c)+prefix+_0xd2e0a8(0x264)+prefix+_0xd2e0a8(0x1f1)),{styletext:_0x1b0f95}=require(_0xd2e0a8(0x1ea)),_0x112576=_0x54bd19?parseInt(_0x54bd19):'';_0x54bd19=_0x112576&&!isNaN(_0x112576)?_0x54bd19['slice'](0x2):_0x54bd19;let _0x2620c1=await _0x1b0f95(_0x54bd19?_0x54bd19:_0xd2e0a8(0x23c))||[];if(!_0x2620c1||!_0x2620c1[0x0])return await _0x30ecf4[_0xd2e0a8(0x261)]('*_No\x20Results\x20Found!_*');let _0x7ca95f='';if(isNaN(_0x112576)||_0x112576>_0x2620c1['length']||_0x112576<0x0||!_0x54bd19){for(let _0x2eaca0=0x0;_0x2eaca0<_0x2620c1[_0xd2e0a8(0x243)];_0x2eaca0++){_0x7ca95f+='\x0a'+_0x2eaca0+'\x20'+_0x2620c1[_0x2eaca0]['result']+'\x20'+(_0x54bd19[_0xd2e0a8(0x243)]>0x32?'\x0a\x0a':'');}return await _0x30ecf4[_0xd2e0a8(0x261)](_0x5522c5+_0x7ca95f);}return await _0x30ecf4[_0xd2e0a8(0x261)](_0x2620c1[_0x112576][_0xd2e0a8(0x257)],{},'',_0x30ecf4);}catch(_0x3ca6ff){_0x30ecf4[_0xd2e0a8(0x282)](_0x3ca6ff+_0xd2e0a8(0x258),_0x3ca6ff);}}),smd({'pattern':'tiny','desc':'Makes\x20url\x20tiny.','category':'converter','use':_0x791ac3(0x279),'react':'✅','filename':__filename},async(_0x55cd99,_0x39a725)=>{const _0x195525=_0x791ac3;try{if(!_0x39a725||!_0x39a725[_0x195525(0x2ab)]()['includes']('https'))return _0x55cd99[_0x195525(0x1e8)](_0x195525(0x21f));let _0x53a87e=_0x39a725[_0x195525(0x281)]('\x20')[0x0],_0x192edd=await axios[_0x195525(0x21b)]('https://tinyurl.com/api-create.php?url='+_0x53a87e);_0x55cd99[_0x195525(0x1e8)](_0x195525(0x216)+_0x192edd[_0x195525(0x296)]);}catch(_0x4bb96b){_0x55cd99['error'](_0x4bb96b+_0x195525(0x212),_0x4bb96b,![]);}}),smd({'pattern':'fliptext','desc':_0x791ac3(0x25b),'category':_0x791ac3(0x25d),'use':_0x791ac3(0x1ff),'filename':__filename},async(_0x29b838,_0x1f1937)=>{const _0x216a90=_0x791ac3;try{let _0x5ab9e2=_0x1f1937?_0x1f1937:_0x29b838[_0x216a90(0x24f)];if(!_0x5ab9e2)return _0x29b838[_0x216a90(0x1e8)]('*_Example\x20:\x20'+prefix+_0x216a90(0x237));let _0x4c5d21=_0x5ab9e2[_0x216a90(0x281)]('')[_0x216a90(0x278)]()[_0x216a90(0x2aa)]('');await _0x29b838[_0x216a90(0x1e8)](_0x216a90(0x249)+_0x5ab9e2+'\x0a\x0a*Fliped\x20text\x20:*\x0a'+_0x4c5d21);}catch(_0x2f047d){_0x29b838[_0x216a90(0x282)](_0x2f047d+_0x216a90(0x245),_0x2f047d);}}),smd({'pattern':_0x791ac3(0x26c),'desc':'encode\x20binary','category':'converter','use':_0x791ac3(0x1ff),'filename':__filename},async(_0x477fa0,_0x172ebf)=>{const _0x57acd9=_0x791ac3;try{let _0x2e59de=_0x172ebf?_0x172ebf:_0x477fa0[_0x57acd9(0x24f)];if(!_0x2e59de)return _0x477fa0[_0x57acd9(0x1e8)](_0x57acd9(0x1df));let _0x19068a=_0x2e59de[_0x57acd9(0x281)]('')[_0x57acd9(0x2a8)](_0x19943e=>{const _0x354855=_0x57acd9;return _0x19943e[_0x354855(0x28b)](0x0)[_0x354855(0x283)](0x2);})['join']('\x20');await _0x477fa0[_0x57acd9(0x1e8)](_0x19068a);}catch(_0x19cc1b){await _0x477fa0['error'](_0x19cc1b+_0x57acd9(0x215),_0x19cc1b);}}),smd({'pattern':_0x791ac3(0x21c),'desc':_0x791ac3(0x25e),'category':'converter','use':_0x791ac3(0x1ff),'filename':__filename},async(_0x109c79,_0x327c84)=>{const _0x43e203=_0x791ac3;try{let _0x1e1b91=_0x327c84?_0x327c84:_0x109c79[_0x43e203(0x24f)];if(!_0x1e1b91)return _0x109c79[_0x43e203(0x1e8)](_0x43e203(0x274));var _0x3d20e2=_0x1e1b91[_0x43e203(0x281)]('\x20'),_0x518e4c=[];for(i=0x0;i<_0x3d20e2[_0x43e203(0x243)];i++){_0x518e4c['push'](String[_0x43e203(0x1f9)](parseInt(_0x3d20e2[i],0x2)));}await _0x109c79[_0x43e203(0x1e8)](_0x518e4c[_0x43e203(0x2aa)](''));}catch(_0x189c8b){await _0x109c79[_0x43e203(0x282)](_0x189c8b+_0x43e203(0x228),_0x189c8b);}}),smd({'pattern':'qr','category':_0x791ac3(0x25d),'filename':__filename,'use':'<\x20text\x20>','desc':'Sends\x20CitelsVoid\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.'},async(_0x14d8b8,_0x588fa9)=>{const _0x3c9366=_0x791ac3;try{if(!_0x588fa9)return _0x14d8b8[_0x3c9366(0x1e8)](_0x3c9366(0x29e));let _0x2f758c=_0x3c9366(0x209)+text;await _0x14d8b8[_0x3c9366(0x25a)][_0x3c9366(0x1e7)](_0x14d8b8[_0x3c9366(0x239)],{'caption':_0x3c9366(0x224)},{'quoted':_0x14d8b8},_0x3c9366(0x20c),_0x2f758c);}catch(_0x347a88){await _0x14d8b8[_0x3c9366(0x282)](_0x347a88+_0x3c9366(0x28d),_0x347a88);}}),smd({'pattern':'paste','desc':_0x791ac3(0x1de),'category':'converter','use':_0x791ac3(0x208),'filename':__filename},async(_0x1228ff,_0x42de8e)=>{const _0x3ca2e7=_0x791ac3;try{let _0x1ee011=_0x42de8e?_0x42de8e:_0x1228ff[_0x3ca2e7(0x24f)],{data:_0x32f647}=await axios['get'](_0x3ca2e7(0x284)+_0x1ee011[_0x3ca2e7(0x201)](/ /g,'+')+_0x3ca2e7(0x225));return _0x1228ff[_0x3ca2e7(0x1e8)](_0x3ca2e7(0x28a)+util[_0x3ca2e7(0x2b0)](_0x32f647[_0x3ca2e7(0x257)]['title'])+_0x3ca2e7(0x233)+util[_0x3ca2e7(0x2b0)](_0x32f647[_0x3ca2e7(0x257)][_0x3ca2e7(0x2a3)]));}catch(_0x4acf32){await _0x1228ff[_0x3ca2e7(0x282)](_0x4acf32+'\x0a\x0acommand:\x20paste\x20',_0x4acf32,![]);}});let pmtypes=[_0x791ac3(0x29f),_0x791ac3(0x211)];smd({'cmdname':_0x791ac3(0x2a0),'info':_0x791ac3(0x2a7),'type':'converter','use':_0x791ac3(0x26b),'filename':__filename},async _0x56f5f5=>{const _0x9ff154=_0x791ac3;try{let _0x5a4d48=pmtypes[_0x9ff154(0x269)](_0x56f5f5[_0x9ff154(0x297)])?_0x56f5f5:_0x56f5f5[_0x9ff154(0x242)];if(!_0x5a4d48||!pmtypes[_0x9ff154(0x269)](_0x5a4d48?.[_0x9ff154(0x297)]))return _0x56f5f5[_0x9ff154(0x1e8)]('*_Uhh\x20Dear,\x20Reply\x20to\x20Any\x20Sticker.!!_*');let _0x324624=await _0x56f5f5[_0x9ff154(0x25a)][_0x9ff154(0x22c)](_0x5a4d48);await _0x56f5f5[_0x9ff154(0x25a)][_0x9ff154(0x223)](_0x56f5f5[_0x9ff154(0x239)],{'image':{'url':_0x324624},'mimetype':'image/jpeg'});try{fs['unlinkSync'](_0x324624);}catch(_0x35be90){}}catch(_0x216abf){_0x56f5f5[_0x9ff154(0x282)](_0x216abf+_0x9ff154(0x293),_0x216abf,![]);}});let audtypes=['audioMessage',_0x791ac3(0x273)];function _0x3c90(_0xebe528,_0x168a7d){const _0x5ad1a3=_0x5ad1();return _0x3c90=function(_0x3c90d0,_0x5d9c09){_0x3c90d0=_0x3c90d0-0x1de;let _0x391e75=_0x5ad1a3[_0x3c90d0];return _0x391e75;},_0x3c90(_0xebe528,_0x168a7d);}smd({'pattern':_0x791ac3(0x235),'alias':['mp3',_0x791ac3(0x1ec)],'desc':_0x791ac3(0x27c),'category':_0x791ac3(0x25d),'use':'<reply\x20to\x20any\x20Video>','filename':__filename},async _0x2577b5=>{const _0xeab4dc=_0x791ac3;try{let _0x32bdf7=audtypes[_0xeab4dc(0x269)](_0x2577b5[_0xeab4dc(0x297)])?_0x2577b5:_0x2577b5['reply_message'];if(!_0x32bdf7||!audtypes['includes'](_0x32bdf7?.[_0xeab4dc(0x297)]))return _0x2577b5[_0xeab4dc(0x1e8)](_0xeab4dc(0x1e1));let _0x2f1044=await _0x2577b5[_0xeab4dc(0x25a)][_0xeab4dc(0x22c)](_0x32bdf7);const {toAudio:_0x1cad2c}=require(_0xeab4dc(0x27d));let _0x175591=fs[_0xeab4dc(0x20f)](_0x2f1044),_0x584616=await _0x1cad2c(_0x175591);try{fs[_0xeab4dc(0x292)](_0x2f1044);}catch(_0x442ba0){}return await _0x2577b5[_0xeab4dc(0x25a)]['sendMessage'](_0x2577b5[_0xeab4dc(0x239)],{'audio':_0x584616,'mimetype':_0xeab4dc(0x1e5)});}catch(_0x2dbd43){_0x2577b5[_0xeab4dc(0x282)](_0x2dbd43+'\x0a\x0acmdName:\x20toaudio',_0x2dbd43);}}),smd({'pattern':_0x791ac3(0x231),'alias':[_0x791ac3(0x1eb),_0x791ac3(0x1fc)],'desc':_0x791ac3(0x24e),'category':_0x791ac3(0x25d),'use':_0x791ac3(0x203)},async _0x104a5f=>{const _0x4f8e16=_0x791ac3;try{let _0x252848=audtypes[_0x4f8e16(0x269)](_0x104a5f[_0x4f8e16(0x297)])?_0x104a5f:_0x104a5f[_0x4f8e16(0x242)];if(!_0x252848||!audtypes['includes'](_0x252848?.[_0x4f8e16(0x297)]))return _0x104a5f[_0x4f8e16(0x1e8)](_0x4f8e16(0x207));let _0x2cef72=await _0x252848[_0x4f8e16(0x254)]();return await _0x104a5f['bot'][_0x4f8e16(0x223)](_0x104a5f['jid'],{'audio':_0x2cef72,'mimetype':_0x4f8e16(0x1e5),'ptt':!![]},{'quoted':_0x104a5f});}catch(_0x321917){_0x104a5f[_0x4f8e16(0x282)](_0x321917+'\x0a\x0acmdName:\x20voice',_0x321917);}}),smd({'pattern':'tomp4','alias':['mp4',_0x791ac3(0x255)],'desc':_0x791ac3(0x25f),'category':_0x791ac3(0x25d),'use':_0x791ac3(0x21e),'filename':__filename},async _0x5c48de=>{const _0xb36575=_0x791ac3;let _0x355421=_0x5c48de[_0xb36575(0x297)]===_0xb36575(0x273)?_0x5c48de:_0x5c48de[_0xb36575(0x242)];if(!_0x355421)return _0x5c48de[_0xb36575(0x1e8)](_0xb36575(0x205));const {webp2mp4File:_0x49eb7e}=require(_0xb36575(0x27d));let _0x25bd8e=_0x355421?.['mimetype']||'';if(_0x355421?.[_0xb36575(0x297)]!=_0xb36575(0x273)&&!/webp/[_0xb36575(0x265)](_0x25bd8e))return await _0x5c48de[_0xb36575(0x261)]('*Damn...\x20Reply\x20To\x20An\x20Animated\x20Sticker\x20or\x20Gif\x20*');let _0x16d84f=await _0x5c48de[_0xb36575(0x25a)][_0xb36575(0x22c)](_0x355421);try{try{if(/webp/['test'](_0x25bd8e)){let _0x3ffc4c=await _0x49eb7e(_0x16d84f);_0x16d84f=_0x3ffc4c['result'];}}catch(_0x398096){console['log'](_0xb36575(0x247),_0x398096);}await _0x5c48de['bot'][_0xb36575(0x223)](_0x5c48de[_0xb36575(0x239)],{'video':{'url':_0x16d84f},'caption':Config[_0xb36575(0x268)]});try{await fs[_0xb36575(0x292)](_0x16d84f);}catch(_0x1e8b2b){}}catch(_0x32de99){_0x5c48de['error'](_0x32de99+_0xb36575(0x271),_0x32de99);}});function splitTextIntoLines(_0x37163f,_0x2904e0,_0x4061f9){const _0x39bc4a=_0x791ac3,_0xc55a91=_0x37163f[_0x39bc4a(0x281)]('\x20'),_0x532b95=[];let _0x21aaf1='';for(const _0x3115be of _0xc55a91){const _0x2932f7=_0x21aaf1===''?_0x3115be:_0x21aaf1+'\x20'+_0x3115be,_0x423480=_0x2904e0['measureText'](_0x2932f7)['width'];_0x423480<=_0x4061f9?_0x21aaf1=_0x2932f7:(_0x532b95[_0x39bc4a(0x26d)](_0x21aaf1),_0x21aaf1=_0x3115be);}return _0x21aaf1!==''&&_0x532b95[_0x39bc4a(0x26d)](_0x21aaf1),_0x532b95;}smd({'cmdname':_0x791ac3(0x294),'alias':['roundstic',_0x791ac3(0x23d)],'info':_0x791ac3(0x1e0),'type':'sticker','filename':__filename,'use':_0x791ac3(0x222)},async(_0x34f0a0,_0x5efcce)=>{const _0x2df8cf=_0x791ac3;try{let _0x3bba83=_0x5efcce||_0x34f0a0[_0x2df8cf(0x24f)];if(_0x3bba83){let _0x479962=parseInt(_0x3bba83)||'';_0x479962&&!isNaN(_0x479962)&&(_0x3bba83=await fancytext(''+_0x3bba83[_0x2df8cf(0x1f3)](0x2),_0x479962));const {createCanvas:_0x1b1e6c}=require('canvas'),_0x3afc2a=require('fs'),_0x13e695=0x12c,_0x342c06=0x12c,_0x5af233=_0x2df8cf(0x29d),_0x17e279=_0x1b1e6c(_0x13e695,_0x342c06),_0x1b2b20=_0x17e279['getContext']('2d');_0x1b2b20[_0x2df8cf(0x219)](0x0,0x0,_0x17e279[_0x2df8cf(0x20a)],_0x17e279['height']),_0x1b2b20[_0x2df8cf(0x210)]='20px\x20Arial',_0x1b2b20[_0x2df8cf(0x27a)]=_0x2df8cf(0x24d),_0x1b2b20[_0x2df8cf(0x214)]=_0x2df8cf(0x27b);const _0x5c971e=_0x13e695-0x14,_0xead81d=splitTextIntoLines(_0x3bba83,_0x1b2b20,_0x5c971e),_0x567f13=_0xead81d[_0x2df8cf(0x243)]*0x19,_0x72e697=(_0x342c06-_0x567f13)/0x2;_0xead81d[_0x2df8cf(0x24a)]((_0x4f3328,_0xd8f656)=>{const _0x67282b=_0x2df8cf,_0x51e87a=_0x72e697+_0xd8f656*0x19;_0x1b2b20[_0x67282b(0x204)](_0x4f3328,_0x13e695/0x2,_0x51e87a);});const _0x33477c=_0x17e279['createPNGStream'](),_0x3080fe=_0x3afc2a[_0x2df8cf(0x253)](_0x5af233);_0x33477c[_0x2df8cf(0x24b)](_0x3080fe),_0x3080fe['on'](_0x2df8cf(0x1f4),async()=>{const _0x58d05c=_0x2df8cf;console[_0x58d05c(0x262)]('Image\x20created:',_0x5af233);let _0x286caa=_0x3afc2a['readFileSync'](_0x5af233),_0x21e01b={'pack':Config[_0x58d05c(0x234)],'author':Config[_0x58d05c(0x1fe)],'type':StickerTypes[_0x58d05c(0x1f7)],'quality':0x32};return await generateSticker(_0x34f0a0,_0x286caa,_0x21e01b),_0x286caa=![];});}else return _0x34f0a0[_0x2df8cf(0x1e8)](_0x2df8cf(0x1f0));}catch(_0x1b1e51){return await _0x34f0a0[_0x2df8cf(0x282)](_0x1b1e51+_0x2df8cf(0x299));}});function _0x5ad1(){const _0x2ede22=['fliptext\x20Gifted\x20MD!_*','results','jid','Anime\x20Pics','cropsticker','Gifted','roundsticker','CROPPED','text','\x0a\x0acmdName:\x20crop\x0a','<reply\x20to\x20sticker.>','reply_message','length','util','\x0a\x0acommand\x20:\x20fliptext','../lib/','error\x20while\x20converting\x20sticker\x20to\x20mp4\x0a','682283PqnvLL','*「\x20\x20Text\x20Flipper\x20Tool\x20\x20」*\x20\x0a*IGiven\x20text\x20:*\x0a','forEach','pipe','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image!_*','black','adds\x20bass\x20in\x20given\x20sound','reply_text','quote','crop','match','createWriteStream','download','tovideo','#FFFFFF','result','\x0a\x0acommand:\x20styly','error\x20in\x20quotely\x20:\x20','bot','Flips\x20given\x20text.','\x0a\x0acmdName:\x20fancy','converter','decode\x20binary','convert\x20sticker\x20to\x20mp4.','white','send','log','Makes\x20sticker\x20of\x20given\x20text.','styly\x20Gifted(For\x20all\x20text)\x0a\x09\x09','test','circle','https://bot.lyo.su/quote/generate','caption','includes','post','<reply\x20to\x20any\x20gif>','ebinary','push','need_Media','node-fetch','random','\x0a\x0acmdName:\x20tomp4','https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=','videoMessage','Send\x20text\x20to\x20be\x20decoded.','png','194756NpTATl','```🔢Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x20\x0a\x0a','reverse','<url>','fillStyle','center','changes\x20type\x20to\x20audio.','../lib','<reply\x20to\x20any\x20image/video.>','circlesticker','https://raganork-api.onrender.com/api/attp?text=','split','error','toString','https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Suhail_Tech_Info&content=[%7B\x22tag\x22:\x22p\x22,\x22children\x22:[\x22','emix\x20😅,🤔','FULL','┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09*💬GIFTED-MD_FANCY_TEXT💬*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x20','<text>','Downloads\x20wikimedia\x20images.','*Paste\x20created\x20on\x20telegraph*\x0aName:-','charCodeAt','sticker','\x0a\x0acommand\x20:\x20qr','28070lcjwlR','emix','925768qRZiAL','9WblhBF','unlink','\x0a\x0acmdName:\x20photo\x0a','ttp','Mixes\x20two\x20emojies.','data','mtype','*_Can\x27t\x20create\x20mixture,\x20try\x20other\x20emojies_*','\x0a\x0acmdName:\x20ttp\x0a','floor','&apikey=with_love_souravkl11','```\x09\x09','./assets/ttp.png','*Provide\x20Text\x20To\x20generate\x20QR!*','imageMessage','photo','\x0a\x0acmdName:\x20round\x0a','1266558znRaAR','url','158145DZqOHc','Example\x20:\x20','circlestic','Makes\x20photo\x20of\x20replied\x20sticker.','map','Makes\x20Sticker\x20of\x20quoted\x20text.','join','toLowerCase','quotely','getpp','\x0a\x0acmdName:\x20wallpaper\x0a','*_Uhh\x20Dear,\x20Reply\x20to\x20image/video!!_*','format','create\x20paste\x20of\x20text.','*_Send\x20text\x20to\x20be\x20encoded.!_*','Makes\x20sticker\x20of\x20replied\x20image/video.','*_Uhh\x20Dear,\x20Reply\x20to\x20Any\x20Video.!!_*','3595260wHddGv','urls','https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc','audio/mpeg','#000000','sendUi','reply','json','../lib/scraper','ptt','tomp3','Suhail-Md','<\x20text.>','fancy\x2025\x20Gifted(For\x20specific\x20text)```\x0a\x0a','*_Uhh\x20Dear,\x20provide\x20text,\x20ex\x20.ttp\x204\x20hii\x20im\x20gifted!!_*','styly\x2019\x20Gifted(For\x20specific\x20text)```\x0a\x0a','<text|search.>','slice','finish','*Uhh\x20please,\x20Reply\x20to\x20an\x20image*','locale','ROUNDED','*_Uhh\x20Dear,\x20Reply\x20to\x20an\x20image!!_*','fromCharCode','wallpaper','\x0a\x0acmdName:\x20emix','toptt','6jyzfKY','author','<query>','*please\x20provide\x20text\x20and\x20image*','replace','Makes\x20sticker\x20of\x20replied\x20image.','<reply\x20to\x20any\x20audio>','fillText','*_Uhh\x20Dear,\x20Reply\x20To\x20Animated\x20Sticker\x20or\x20Gif!!_*','axios','*_Uhh\x20Please,\x20Reply\x20to\x20audio/video_*','<\x20text\x20>','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','width','alloc','image','*_Please\x20quote/reply\x20to\x20any\x20message!!!_*','https://api.memegen.link/images/custom/','readFileSync','font','stickerMessage','\x0a\x0acmdName:\x20tiny','status','textAlign','\x0a\x0acommand\x20:\x20ebinary','*🛡️Your\x20Shortened\x20URL*\x0a\x0a','*_Uhh\x20Dear,\x20Reply\x20to\x20image!!_*','\x0a\x0acmdName:\x20memegen\x0a','clearRect','CIRCLE','get','dbinary','7WXzFrr','<reply\x20to\x20any\x20Video>','Provide\x20me\x20a\x20link','wa-sticker-formatter','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image_*','<reply\x20to\x20image.>','sendMessage','*_Scan\x20Qr\x20To\x20Get\x20Your\x20Text_*','\x22]%7D]&return_content=true','*_Request\x20Failed,\x20Reply\x20to\x20an\x20image\x20only!_*','*_Request\x20Failed,\x20Wallpaper\x20not\x20be\x20fetched!_*','\x0a\x0acommand\x20:\x20dbinary','56\x20Gifted','trim','*_Can\x27t\x20create\x20quote\x20sticker!_*','downloadAndSaveMediaMessage','pushName','<reply\x20to\x20any\x20message.>','regular','Write\x20text\x20on\x20quoted\x20image.','voice','roundstic','\x20\x0aUrl:-\x20','packname','toaudio','getName'];_0x5ad1=function(){return _0x2ede22;};return _0x5ad1();}