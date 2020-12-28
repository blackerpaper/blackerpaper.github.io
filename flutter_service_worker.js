'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0cde503036603ea570b31174b98ca610",
"index.html": "c885fbd98aaa7939a89d4d1e024f97f6",
"/": "c885fbd98aaa7939a89d4d1e024f97f6",
"main.dart.js": "c24d05ea6fce62829e3e4cfb493ca26d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "afd7542e2bde7d8291eaf1984f099d2f",
"assets/AssetManifest.json": "1d4b33ed81b05589286ee949d7f31d65",
"assets/NOTICES": "557ae4936e46a124148d835b566b574a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/cred.png": "a9a112c33e8f20fe636bd4131af4faa5",
"assets/assets/images/tks.png": "53fb0b84bc23ae993778c83894af413c",
"assets/assets/images/dnt.png": "47b4b318b6c6b7a6c92ad3db9ba4d877",
"assets/assets/images/bcbc.png": "ac11488b7b4075c3a56f5bb986e193d5",
"assets/assets/images/npxs.png": "008632447f831297a6d9eaa62c5dadbd",
"assets/assets/images/add.png": "f5ecc3883487d23beffa3feba10bf7a3",
"assets/assets/images/krb.png": "521dac933ca094626c1ebdca65864fc2",
"assets/assets/images/pgt.png": "baaffb6874bce8dbb9a96fc6feb1c6a5",
"assets/assets/images/blz.png": "da6d2688a02274526759636ab2f7f13b",
"assets/assets/images/rads.png": "44058b3e9aa391c527bed97c390f8575",
"assets/assets/images/ardr.png": "5a02458c92c9273356780874e9478ffc",
"assets/assets/images/ebst.png": "d841e9bf248dfca26cc0407ce5fac0f7",
"assets/assets/images/appc.png": "9aae1dfaf6d6e22b1e7038602e6f0d84",
"assets/assets/images/bcc.png": "b76a5123586806800ff6435873d910a2",
"assets/assets/images/dash.png": "ce0624d144e14ec4042e23482dd766d7",
"assets/assets/images/nxs.png": "665f74f57700848f5b2937df2009a6d1",
"assets/assets/images/auto.png": "39afbd8f985d4f802d19c409447761a3",
"assets/assets/images/edoge.png": "937dee4295e9c7354721e31ea864e527",
"assets/assets/images/agi.png": "2c891840f75fae456507016dfa9b68fc",
"assets/assets/images/rise.png": "53d5ef3ed017c7d5aa44a080a84846da",
"assets/assets/images/dcr.png": "787f80756d8659642e86810ea0f0dc4e",
"assets/assets/images/ten.png": "a5f408fa0d908b5dccf937755b8775dd",
"assets/assets/images/ost.png": "601d18f936402e13e0a94ba113d4f5b0",
"assets/assets/images/loom.png": "6bbd1f39cbb3682d7f31195d2b2bfc51",
"assets/assets/images/unity.png": "56e89e963c9e404587ece33a7572594a",
"assets/assets/images/vivo.png": "242e2d2e8e74d29e83361a774332bd4e",
"assets/assets/images/tix.png": "8a69064f493104ef30c2cce7680a1dfb",
"assets/assets/images/snm.png": "b18dc68372d66cd6ff8f92ab5c8ac110",
"assets/assets/images/zec.png": "d9476af7db05813dd9fdd7aa39fe7977",
"assets/assets/images/slr.png": "e8c92810eaf3451a86dfd793e7b092a1",
"assets/assets/images/dbc.png": "84ec278fdc94b97df09f1b6a2f33da0d",
"assets/assets/images/mkr.png": "a5fddd2b13ab6fa89963498459d3a494",
"assets/assets/images/xp.png": "16cbf3fce8a10694ed480983bd8a4910",
"assets/assets/images/tel.png": "b1a32c55f5b28d3957215d7de7fc4f16",
"assets/assets/images/ae.png": "57fc16e870fef2eb88c5eeb058d8df9c",
"assets/assets/images/hodl.png": "ba4a4a3023197cf210859111500b1054",
"assets/assets/images/sys.png": "0586679b9bfe03ab27238d228d9bf67f",
"assets/assets/images/ven.png": "c7e01cdd56d553aff2ab31e2cc01cabc",
"assets/assets/images/nas.png": "14d7472055f4611c0ef0fc3a92bcce65",
"assets/assets/images/agrs.png": "f2510bcad0e26ba2277d3d4456c70c89",
"assets/assets/images/rdn.png": "5798245642ffed172702720c24e0e743",
"assets/assets/images/elec.png": "13c0856e9ab1c85b9aa0903f8ea0159c",
"assets/assets/images/qtum.png": "5c7b2d950601df2c5832b5d3b6d30dc0",
"assets/assets/images/btch.png": "281be2e24266718cf12a2c9bd80beb73",
"assets/assets/images/ox.png": "b0ab7cea2d81d02dc742ffa8101d7078",
"assets/assets/images/xpa.png": "79d194bbcae42a491c1cc6781239edf9",
"assets/assets/images/ark.png": "4367a514201c2f17a06229c2bcefa487",
"assets/assets/images/sls.png": "14f21dc8ae718a7ee3cce9a39fa997de",
"assets/assets/images/mft.png": "90863626a3c64b4ef0c4d6c06184dc8c",
"assets/assets/images/dnr.png": "c67556b00717e410c3b5d871b073a9e8",
"assets/assets/images/ok.png": "180148c4060585464071be29592bc1e2",
"assets/assets/images/stq.png": "c4f89c829635e71cb6a7af5be5e35d01",
"assets/assets/images/flo.png": "c3266aedceaabd6c483887d4118232b2",
"assets/assets/images/sub.png": "4f232852cb65475306f6727b844867f9",
"assets/assets/images/crpt.png": "77a5bfb1063911ee09e13e091a1f42a9",
"assets/assets/images/neos.png": "4755411afee8124922ee72fc26b93ac3",
"assets/assets/images/zrx.png": "8f8a618b98c94edb6a348924cd3024d3",
"assets/assets/images/btm.png": "b8a873734f7ce56ba0e286993f10d27e",
"assets/assets/images/nav.png": "58c48420bef82a0da963c9b998441e0d",
"assets/assets/images/doge.png": "1938a5ea7cbe7458795a834563258ced",
"assets/assets/images/blk.png": "ac7ecd3968c30a0575f8dcd0bac18e5e",
"assets/assets/images/bnt.png": "b47ed6f9662a04563b2d69cf3dbdb8f5",
"assets/assets/images/matic.png": "604f4e6a80cae6d459d5a687cde5ee3b",
"assets/assets/images/$pac.png": "b7423752d310ee02ff0ae52c7eb565cc",
"assets/assets/images/nxt.png": "be46f5997bceb77abc009eefcc10367d",
"assets/assets/images/bcd.png": "996eef076a3d91089ef892681b239b72",
"assets/assets/images/kin.png": "c9f01d3b42ff12779c281ef68b868a9c",
"assets/assets/images/edg.png": "87ea90158822e8f74124bdbb3fb66438",
"assets/assets/images/game.png": "409ca2fc2686d38fd3e6cbaf328e8535",
"assets/assets/images/ren.png": "ab045a1fbf68ce1e0baba95558c776e6",
"assets/assets/images/gxlt.png": "a13feef15f94d031e9791ddf0bd6dfb7",
"assets/assets/images/bnb.png": "fefe5d0b26806c858130f0eb454e1106",
"assets/assets/images/wtc.png": "642742dbca7f19363f19208bbf5625b7",
"assets/assets/images/pre.png": "e7af386b254c0f4619711e065ee43056",
"assets/assets/images/lend.png": "71c02589257a8732ad363c1443e08276",
"assets/assets/images/tusd.png": "d1d8a1e8a8b8b9d085fa8970ce6298a8",
"assets/assets/images/ltc.png": "95507ffd15fb458032339c7dc775ed70",
"assets/assets/images/nlg.png": "3915e93821bd024b4ae0a0380b622a32",
"assets/assets/images/nmc.png": "f097a20492a8054c204b85a1e576c8e9",
"assets/assets/images/rpx.png": "a5f06d5eff7e733807582294565d1295",
"assets/assets/images/meetone.png": "619d9c5d7e376c26f478f5994461e12f",
"assets/assets/images/fair.png": "1029ada36679d0f789a53fb9c124807e",
"assets/assets/images/qlc.png": "25245a0b25a7367fb10beeee5dd964e3",
"assets/assets/images/btcz.png": "4b2f943ce4cd12fdd2f3b5ad05d61ae8",
"assets/assets/images/huc.png": "2f186ff36eb32181eb699bfddc2077e2",
"assets/assets/images/vrc.png": "47dee0c76a3c12cb0a47b2fc9bdec840",
"assets/assets/images/ary.png": "4f9023905e7ded932e2046d42b7236ef",
"assets/assets/images/arn.png": "f205636300c1c3c5b1fecbeb09d3ee98",
"assets/assets/images/fun.png": "381853feeb8c88a5e37158235c419d69",
"assets/assets/images/dai.png": "704fc0c6e9138364751df3393c4370cd",
"assets/assets/images/cdt.png": "ab1583fb7e8c62c59c3f12ae739a0ac8",
"assets/assets/images/clam.png": "a8a0a5f8779f7410e79f7e0683caee05",
"assets/assets/images/sberbank.png": "e7b4d5384c4ba72dfff3c38b606a2453",
"assets/assets/images/dth.png": "f077a304615dc39728dc90de72de418f",
"assets/assets/images/fct.png": "7a0213e2cab7669fd93583549a14a979",
"assets/assets/images/emc2.png": "1f6f755e6764fffdfe0370402d3df084",
"assets/assets/images/msr.png": "41cd16a5858af822aca48d136442f848",
"assets/assets/images/ada.png": "b46b7cf5e660032d28bffdd8a46683ad",
"assets/assets/images/iotx.png": "2df5d7d449c5da5c84c9430423124b17",
"assets/assets/images/bze.png": "304de66336c1609f851dbd238b5d29c1",
"assets/assets/images/bos.png": "88340f9abb73abfe58aca5b55d8b6538",
"assets/assets/images/link.png": "cd7a3c655a6c56b0ea965ea1c45b53cc",
"assets/assets/images/bay.png": "7b808615dd9ed528c6d066f98afc77ab",
"assets/assets/images/btx.png": "309a0ef747e7dc7a4df16f081f211c1d",
"assets/assets/images/beam.png": "0c54e5d577cdd5fc5df2c5c70aa7b305",
"assets/assets/images/salt.png": "4db29f4fb2e5ca588ec08bdcaeb5c741",
"assets/assets/images/x.png": "0cdc9bdec8df8248ffa69fc2635ae470",
"assets/assets/images/pasl.png": "ebae481362ef8e103e85f28eb9a503a9",
"assets/assets/images/stak.png": "69ffd709baecf4c9428c967a6b44c270",
"assets/assets/images/nexo.png": "1eebd99366728c74fb5a259544e49f08",
"assets/assets/images/cob.png": "c0d0284f4551f20525be8177a5e1eb2f",
"assets/assets/images/xzc.png": "9bf809158a2f9b65966a20549f3244ed",
"assets/assets/images/cenz.png": "f161c8b2ca70a11a3be08ed871c202e6",
"assets/assets/images/vrsc.png": "778b38bacd4a9ccd759de709047b4b9e",
"assets/assets/images/chain.png": "1b2b82227dee215e278b0fa9e5ff160c",
"assets/assets/images/omg.png": "1d85ca478239aa1aadb747426db3e3f5",
"assets/assets/images/act.png": "a8665273861a57e5e9059ed2f50f9f21",
"assets/assets/images/etn.png": "41ff7cf4ade9c73aeba1bd269df48ee2",
"assets/assets/images/nio.png": "7e455c0955252836babbfacc2b15160b",
"assets/assets/images/tghc.png": "fe497a796c6778db08e797d466428dc1",
"assets/assets/images/entrp.png": "01f71beb469585518183ce771aef3a11",
"assets/assets/images/eos.png": "289c10f3f02d5596abd1c1730128df1a",
"assets/assets/images/sumo.png": "7a6a226b72e85a753aaaf28072bb8d62",
"assets/assets/images/vtho.png": "13263f31094889529c0fa5b38b99c6b8",
"assets/assets/images/itc.png": "0d50b3c2f9efbb61c53fc684f9f471e3",
"assets/assets/images/pura.png": "fe225b79a118ef2502af30b1e4e7fa00",
"assets/assets/images/chips.png": "a2ac6c9fa3cc83564760b828143f98e6",
"assets/assets/images/fuel.png": "4e39f7692e4ba961dd1c230a721560a3",
"assets/assets/images/leo.png": "7c57747c2289638955cb7ebe12962da5",
"assets/assets/images/0xbtc.png": "b08098c6d231f8023df02f54f23d24f5",
"assets/assets/images/tern.png": "0b37435529b882190986e8539bebf618",
"assets/assets/images/pivx.png": "20479c8c2c7116e3309cd68b1f0cb1e2",
"assets/assets/images/gnt.png": "bf7d00959911b6d6dbbd872e83b9effc",
"assets/assets/images/colx.png": "fd5372c8188fa686160ea799e7bc47e9",
"assets/assets/images/mco.png": "a3c06b5a37551d3372afd5e21aadee3f",
"assets/assets/images/hight.png": "42b178178ea34b8e4634a85e8e6852c0",
"assets/assets/images/sc.png": "00c96c923c642f0e79cff332e635300a",
"assets/assets/images/mith.png": "3af870322ffc814aac09e2cde30553ad",
"assets/assets/images/xvc.png": "d84454b34a70d9da3c9c731355b18d8b",
"assets/assets/images/polis.png": "2c28855276e505464b33315fffb72fe8",
"assets/assets/images/cvc.png": "11cfbe1490bbba822a581a5424fc6dcf",
"assets/assets/images/xlm.png": "faa1daf737e198d7bfd3c92a6e8e5351",
"assets/assets/images/veri.png": "62bd0b89690fff7dbe64296346869884",
"assets/assets/images/neo.png": "9d79c198f735e8e2693e925f55d171ec",
"assets/assets/images/bpt.png": "d94afc8e41b1d7836acfe78c92b7897b",
"assets/assets/images/wgr.png": "7e30c6672241e10b2785e43d15cf883b",
"assets/assets/images/dock.png": "bdce8445662f39465faf64b3f3f8cd87",
"assets/assets/images/wings.png": "b5a13079fde5f5650ba274f488182859",
"assets/assets/images/pink.png": "3adcb0fe755fffaa933cba609a3c3491",
"assets/assets/images/gto.png": "ee6acb6bb6d7e940a2ff2c8d072b586b",
"assets/assets/images/eop.png": "59748875b9d4833ccf4d539707c257c7",
"assets/assets/images/gzr.png": "d047dcd2b95f0f8695f48ff65ae2dd82",
"assets/assets/images/aeon.png": "76d97bb03953430e5627d71153957001",
"assets/assets/images/plr.png": "a64c964255a01a9e7830df399484a9af",
"assets/assets/images/mona.png": "edee9b68115099785af0f0df821e4d87",
"assets/assets/images/nuls.png": "b55376e91c5fc03d91fc305d0bbfd0b6",
"assets/assets/images/burst.png": "953ce648b47f4a67b65d3d2bef87c543",
"assets/assets/images/btdx.png": "577c63d38016ef06236f4ec3452f8928",
"assets/assets/images/music.png": "5fcb2be031bc4db6214942401de36e8b",
"assets/assets/images/safe.png": "d63a94fe0b0820d87b06db93d582a009",
"assets/assets/images/xbp.png": "2d46931df5957e4c961736912bd1758a",
"assets/assets/images/eqli.png": "3cf06504a779658627cf403b363ec0df",
"assets/assets/images/hsr.png": "1ae37c4f205e4998e86ab5712123b45e",
"assets/assets/images/qsp.png": "701be49b58d7ad7273bac828cdd0a5e9",
"assets/assets/images/wabi.png": "a477fa322667408a6b4a31ce2c944c58",
"assets/assets/images/cnd.png": "bccf39815240101d15d6271e03e3d08a",
"assets/assets/images/fsn.png": "b1ffc7faf2218428871bcbe42d3203da",
"assets/assets/images/tau.png": "257f4ed3c194b7a401b329ce743f350d",
"assets/assets/images/mnx.png": "3dacd28af1a3c1e57091da76035d8555",
"assets/assets/images/bcpt.png": "69e61958c9121a759d0b4323a9233a09",
"assets/assets/images/xbc.png": "9d6ffca120de51c3bfbb4e89823ca296",
"assets/assets/images/xcp.png": "23d5a5ca0323685de1494c7eb8af7f9f",
"assets/assets/images/eth.png": "174b0414fece541456d82f84a296e380",
"assets/assets/images/smart.png": "53475a3d0c8ca9083fdc39209cd926b0",
"assets/assets/images/gbp.png": "02ba62d3ab0513f348f2c358dc0e704f",
"assets/assets/images/ink.png": "7161c7043cc95a4353f40d1744cb11da",
"assets/assets/images/shift.png": "c89f8bf600b61970a649a317e4c9b645",
"assets/assets/images/rlc.png": "1f7e35467664939558e7440384aa02d0",
"assets/assets/images/mcap.png": "1cce58b845f96d7946a661db4c10e2d2",
"assets/assets/images/eca.png": "9eca16a85c9695780c2a17a69c5b3c22",
"assets/assets/images/kmd.png": "d6cd96e06f7c1095a63a8297d6e2c8b3",
"assets/assets/images/eng.png": "86118c71d5d5e53c358ed66345da82b0",
"assets/assets/images/gvt.png": "11eb9588333cfca92cb3e3f216093b63",
"assets/assets/images/ion.png": "37352829ead19860bf34b5c8fd11dca9",
"assets/assets/images/strat.png": "15491fee21b3b1a6d3c7890f1fecf211",
"assets/assets/images/aeur.png": "ad8a0a92785fe0273f4b8ba6b4bc78f0",
"assets/assets/images/ngc.png": "179ed882a4bb0b8a13f619756e4e8919",
"assets/assets/images/jpy.png": "6f39a8e602854e94602469b38b1f9758",
"assets/assets/images/payx.png": "e000d0085e84dc9c150f568e6575f72b",
"assets/assets/images/ant.png": "bece9da1bb17b7e7853dc25dfe601b13",
"assets/assets/images/dent.png": "1ddeeae7d3a3f680b5de96d94c9d9920",
"assets/assets/images/tbx.png": "96a00a7d6249f506a1df2785ae68237a",
"assets/assets/images/xvg.png": "d1b1d049100866ca0a19af5c132e632e",
"assets/assets/images/dew.png": "fd9138b355da7741109f4e27a2aac9a4",
"assets/assets/images/atm.png": "aaa96ba5564a34047f2bae16ed3bab2b",
"assets/assets/images/sin.png": "3d1afe76237a9b66aa317517b952ba0d",
"assets/assets/images/cmm.png": "4b8f2db28f7d30d20880fff4090119e7",
"assets/assets/images/xtz.png": "b358cadc5a02ec7b7e2e2d571a650f0e",
"assets/assets/images/cloak.png": "ce4eff8c3e380889092169ff10b8984a",
"assets/assets/images/xmo.png": "a70b97a44466aebea9cea269458c1104",
"assets/assets/images/icx.png": "4f3696f02172d074e2e9542edb093e1c",
"assets/assets/images/rvn.png": "d3de678e71fba0454716fdda4ea81397",
"assets/assets/images/ndz.png": "8096b2ccc8170ab45b1507ad8797212f",
"assets/assets/images/usd.png": "835a155cc1b6db8132c9356f3bbb8dde",
"assets/assets/images/rub.png": "36e240554dece97a017534f1e417deca",
"assets/assets/images/blcn.png": "c1408bdcfd5a9fdc29096ba44ee89712",
"assets/assets/images/pungo.png": "baaffb6874bce8dbb9a96fc6feb1c6a5",
"assets/assets/images/audr.png": "dcfe99bfe38cc2e61a0c3bb5cea7ac35",
"assets/assets/images/rap.png": "d69272ddf8bc76c5374b255e3af23e00",
"assets/assets/images/wicc.png": "a48e7566d51a1e3bcc210512fb4b871b",
"assets/assets/images/rcn.png": "27f787d47383ea99516b2f1c82be2d0d",
"assets/assets/images/theta.png": "0b607e7ca7d6fe0e3c5a59ab1af5b1fa",
"assets/assets/images/lrc.png": "44167059cb6e70731c6f643a0d96f09c",
"assets/assets/images/icn.png": "34bf6bbf5803bf8e62ab9e5a26c47810",
"assets/assets/images/usdt.png": "1209268b2a9b376e08bdcfb12b98aaf9",
"assets/assets/images/usdc.png": "db0c4c9dd7bb09cd0d336587b2587740",
"assets/assets/images/abt.png": "d1f9c830a6e8be9bfc7db207a8816b52",
"assets/assets/images/xmy.png": "4990c09d0dfab326296aae5e8cf590b7",
"assets/assets/images/mnz.png": "2adb2b3f58b0ef3eff426d0c2b7beb10",
"assets/assets/images/vtc.png": "e74a6b5e09d63cf59cb917e0bd712445",
"assets/assets/images/cnx.png": "0870f8aaaa7cfd670ec05997a0e32e03",
"assets/assets/images/tnb.png": "144b1449798301ca452ddee5970bb27a",
"assets/assets/images/cmt.png": "455136615d1d2ef9247b041b2675fa0f",
"assets/assets/images/mod.png": "404628e5b5eaa612e4a846a3bd9cea2b",
"assets/assets/images/2give.png": "4679628f7b1b2068e512689c93ec34c5",
"assets/assets/images/hpb.png": "2d3087674f5e23cf0334e6cdd532bb69",
"assets/assets/images/powr.png": "649394fb10bf4e8557d7745c9036c8ad",
"assets/assets/images/fjc.png": "97d694285112cd34d9eeb81ab4904ac7",
"assets/assets/images/ht.png": "3021379783780ab4f00572c766f49ecc",
"assets/assets/images/evx.png": "b73c16bbb24cacd9d6a298e2098128bf",
"assets/assets/images/etp.png": "1382a23c83dad97843160d575e6843fa",
"assets/assets/images/ins.png": "d9b417a268acce2e4d6241d70a03431f",
"assets/assets/images/gas.png": "9d79c198f735e8e2693e925f55d171ec",
"assets/assets/images/ela.png": "c585a3233c7c8aefea10100c849b1d35",
"assets/assets/images/bdl.png": "5a8876b7f9650e021086b2c8a654989b",
"assets/assets/images/fldc.png": "19dea1e962df948d2f19ec567aa4669d",
"assets/assets/images/lsk.png": "6ed509e17335b545889d58cfad3c89e1",
"assets/assets/images/pot.png": "b25933b698559df7e13c8d137345159c",
"assets/assets/images/bsd.png": "98a8673c29e44c9e54a5cec01a270a06",
"assets/assets/images/ctxc.png": "ee94e36f147a5045b005224c01f60e5f",
"assets/assets/images/ont.png": "e2714271ed4e129a7c90639e3d2c7f34",
"assets/assets/images/equa.png": "bbd678be4867b4035024cdb4f9816adc",
"assets/assets/images/block.png": "40be3f678ecc6dfe9e55b6b639470e0c",
"assets/assets/images/bcio.png": "c1c69d17ecbe86b317cca6b3b2adc04c",
"assets/assets/images/iq.png": "b114714c755d0990f272324caaa31aee",
"assets/assets/images/poly.png": "14eff7733e8411eae2e0ce1485002425",
"assets/assets/images/tnt.png": "b1466447519daaf1454697c678c23ca0",
"assets/assets/images/tnc.png": "c59fe85ec7ad48ab8625c0d6811253fa",
"assets/assets/images/cny.png": "ac5804fc2b5efdd69f2a282084632072",
"assets/assets/images/drop.png": "f389c7902fa4623e6f4830e8009a68de",
"assets/assets/images/atom.png": "f0fe5873ebbeca55d55757ba1d7b8b0c",
"assets/assets/images/amb.png": "f9b79b613ceb6ab1378b5f349658bf9e",
"assets/assets/images/fil.png": "ae1e7cfc80cf80068460c001e709b5b7",
"assets/assets/images/poa.png": "708996f3e175a80d97f0d48aef3ab1de",
"assets/assets/images/exp.png": "95f2d1a1f16ed630f3a1764fc5bda354",
"assets/assets/images/wpr.png": "1b9f01c952e2ac7e774fb07cf92ec36e",
"assets/assets/images/enj.png": "3afb1eb19c1f9d0c5097b5cd1514ded3",
"assets/assets/images/eon.png": "3f44213b0873cd55649427a08b4d95f7",
"assets/assets/images/ncash.png": "eb57825d310b2d0dd4b52d1e4bba56a8",
"assets/assets/images/gxs.png": "e4ec0cffbffe5f485cc37e0bb4fdf55b",
"assets/assets/images/qash.png": "5fd4869f6d5b33be34afcecd5706e88c",
"assets/assets/images/ryo.png": "da550fd98cb10f3e3508abc7a17e2f2c",
"assets/assets/images/gmr.png": "559d9d32626dc68cc96c06647ee6e0ab",
"assets/assets/images/klown.png": "1a3a1b87b3979a27ae19c2cf5ab2b941",
"assets/assets/images/mtl.png": "1fdf2d66a6174a4829e64cfa0ebba44f",
"assets/assets/images/ethos.png": "3aa9cc9e6dbc1c8767c6bfb533995352",
"assets/assets/images/oax.png": "d86fc78b52aba82cdb1e26ca12fc9954",
"assets/assets/images/xby.png": "7ee76b6c85a2cdf9ed00c25b7c752628",
"assets/assets/images/coqui.png": "1fa98829494c340548bb773771d7a715",
"assets/assets/images/dgd.png": "ebe2c13300cf2b761883d0aef3e49005",
"assets/assets/images/sib.png": "f5367d68345b753216c9fadbb11d9cfd",
"assets/assets/images/zcl.png": "1a1ab2ca66f22a3576e563b98ee88e28",
"assets/assets/images/sky.png": "2951d94be313e655d33fdf236f820050",
"assets/assets/images/xuc.png": "3bc69b106c29a687f68fde1f8603160f",
"assets/assets/images/html.png": "b987f5bc73433d56c5e4aaa81a0e0aab",
"assets/assets/images/mln.png": "a1a76aea2daa858ebfdcafb3b08bd5bd",
"assets/assets/images/mzc.png": "e12108dadd33aaae8d930f13a6e6a71e",
"assets/assets/images/amp.png": "aaf9d7a90dd2a7a24cb0d8575961393a",
"assets/assets/images/xmr.png": "d5b4ef9b0226fb8b3cd8359efc6fb6cb",
"assets/assets/images/nlc2.png": "173eb7b65ad2ce8ff9307874d76dc98d",
"assets/assets/images/mth.png": "83904fc6ece053310368aaa98e5b3086",
"assets/assets/images/eur.png": "10fa5490ca52b495377074a7ace7d1a2",
"assets/assets/images/aion.png": "bdb4077c06a7704cc829702601bd3e38",
"assets/assets/images/moac.png": "a03d78069c6f30a5508764494b0bb0ae",
"assets/assets/images/pax.png": "17f63fe842fe57b72d86013aab16f2ac",
"assets/assets/images/gup.png": "0d42fbafd230f5ffa6647f262302fbbc",
"assets/assets/images/emc.png": "2c3dff1e07b1b97a888b34a46959083d",
"assets/assets/images/data.png": "49d41dc764895590340d28a28d38ea7c",
"assets/assets/images/trig.png": "bb93099d014ba2b8605a7956b2d2c409",
"assets/assets/images/lkk.png": "92ccd713bc7b865cca756f0e1b712c95",
"assets/assets/images/elf.png": "ab71e8ae9cc38b606d4dc0da5e1b5a50",
"assets/assets/images/pay.png": "a81db6c68d8f464126ac9257f4ed7ce8",
"assets/assets/images/gbx.png": "2a5bf6cfa7d2e1e379b77fd8b72f6d6a",
"assets/assets/images/ilk.png": "3b5677f4cc0c5d3b987130b5873c2e97",
"assets/assets/images/iop.png": "16e76549a92c526ae94a51972a4a880b",
"assets/assets/images/poe.png": "95b5dad5a9f65da4873502db95b8f290",
"assets/assets/images/bnty.png": "373e169a48a5f3c340592d8c44b09fa0",
"assets/assets/images/neu.png": "3d0c690377c3a5395ea55b08e975a478",
"assets/assets/images/iost.png": "9bc2aa1eb9bd26e5951f995b606fd9ef",
"assets/assets/images/actn.png": "d73bf9628cab77abb3eb84fbbf8aca82",
"assets/assets/images/grin.png": "ed6ed8bd9ffebca55f59a1d51b6eba55",
"assets/assets/images/cag.png": "2fa11a468897351fe269e6a8948e594a",
"assets/assets/images/glxt.png": "a13feef15f94d031e9791ddf0bd6dfb7",
"assets/assets/images/sphtx.png": "4abecaed62106340016fafc74ee8818b",
"assets/assets/images/sngls.png": "c193d04e0e34ec9362b68d4ac16afed0",
"assets/assets/images/generic.png": "73045f24e5f02c5e08ab82dbdff9edbf",
"assets/assets/images/ong.png": "f3a20b3159939318ecb0399bcf096303",
"assets/assets/images/oot.png": "50d6184b96a70cb1742b6a3ffc73d641",
"assets/assets/images/ella.png": "2c4123ce69ffa1f0cacd3a2582e65569",
"assets/assets/images/brd.png": "0c90f90d3aee83ecf81a3b9b8da5a862",
"assets/assets/images/lpt.png": "d39dbd4a4ed43e69d83985890c74d1a1",
"assets/assets/images/kcs.png": "97f971b7b45d69ec0ea4a5b11b617559",
"assets/assets/images/knc.png": "899b6dcf9440c2ff26e1f0c57446c68e",
"assets/assets/images/bix.png": "a5e9ab6f32dc05af72c13bf72cb1617a",
"assets/assets/images/zest.png": "e075c4f745f6d7e340a2cf4416928a9f",
"assets/assets/images/waves.png": "aa69e2d445bb27ff3099306af3509253",
"assets/assets/images/hush.png": "d9c9d1912c10790979194aee99103bb9",
"assets/assets/images/mana.png": "3a411ccd9c0bb9cb29fbd89e4925f6ae",
"assets/assets/images/call.png": "f049b33a63acae25e99584a33491cc06",
"assets/assets/images/etc.png": "e4c7bf01ef77a896f872687847be7ad1",
"assets/assets/images/gno.png": "5f6f1a548133b6127a9297a037b461ec",
"assets/assets/images/bsv.png": "8802468d6139740fbf2914fbdab66a71",
"assets/assets/images/tzc.png": "d5fcf2fe603bdcf62fd90ec3d21350c6",
"assets/assets/images/xmg.png": "e3456da59d31320b7e76fc37765357ca",
"assets/assets/images/xas.png": "3ee2fdee3617bd8711d3af8ff622e633",
"assets/assets/images/srn.png": "3de05784837c6b7d0821882db2c1e07e",
"assets/assets/images/ctr.png": "d7985cc0d6fbf071c8a1d154135828b6",
"assets/assets/images/dgb.png": "057366f60c64c24f6389f9b7b8d1e3d2",
"assets/assets/images/qrl.png": "3af2d33de60c4b7405da5dbdbb76b856",
"assets/assets/images/omni.png": "5db394849a7001fbb52bb9a59a8b5022",
"assets/assets/images/gbyte.png": "542aeff7daa46b9f50adc1c77527386a",
"assets/assets/images/soc.png": "4e627372c226bcf433bcb6436fb195ed",
"assets/assets/images/med.png": "40ee4b5892639bd6f0bb963633476878",
"assets/assets/images/sbd.png": "bddddfe6a9c2048893bc6a3d04a79b77",
"assets/assets/images/trx.png": "5fbc19431571d797f155b41bf550d3da",
"assets/assets/images/nebl.png": "ded72dd1f9684e51929d8928e076bcbc",
"assets/assets/images/hot.png": "6f991de7766f4a6924f85aa64fe37468",
"assets/assets/images/pirl.png": "18a1d0dd8cd7d1a00ccd44b801c39ca8",
"assets/assets/images/ric.png": "32701d9858f7e5b7148b942d847c0488",
"assets/assets/images/ppc.png": "342c2c6549e692aa6e20651db095dd78",
"assets/assets/images/rhoc.png": "97c8a941cda53cdace2da742fb760ae3",
"assets/assets/images/ppt.png": "f32958e8faa7d0f7726854497f629411",
"assets/assets/images/rdd.png": "235c7461d8b4624e7e47ed864e42b135",
"assets/assets/images/bat.png": "7705cca3b932d4ca5992d252f1f0065d",
"assets/assets/images/bab.png": "089aaa76151adc4c8573826823d07320",
"assets/assets/images/gsc.png": "1895f74cdcfc9fcd0553dac04d23dbd7",
"assets/assets/images/btt.png": "638862559761aac8acf6d1770ad88f03",
"assets/assets/images/btc.png": "8f8d12b8691a706a99e7544bd33527c2",
"assets/assets/images/yoyow.png": "d47b42970eec32915fc01bf318507eb5",
"assets/assets/images/ignis.png": "76841168bcdc2d4272fe6b7895bfb032",
"assets/assets/images/dtr.png": "72937035c7fa8c0272ef6ec127f77e15",
"assets/assets/images/xdn.png": "63f019444dc40d6828d4d565ae7bba8d",
"assets/assets/images/ampl.png": "78190d94d6b0268982d8488d3cea440d",
"assets/assets/images/xsg.png": "e074279724fbb867690d68a639aecb5e",
"assets/assets/images/cdn.png": "86106d836c088daa5cdb35321260a69d",
"assets/assets/images/mda.png": "13a69c96e9b70be2a072631d4da65495",
"assets/assets/images/dlt.png": "75919ceb8d09e83e86c31ffb04a60533",
"assets/assets/images/qiwi.png": "fece8f7f7f6785323a348652304ea43d",
"assets/assets/images/exmo.png": "38c06e9feed464e5fcda65c7c7950cb3",
"assets/assets/images/tkn.png": "b98c4353ccd25176b2dc9ff0daa9528b",
"assets/assets/images/dcn.png": "33b3e539881ef4076143437d9eb423ee",
"assets/assets/images/booty.png": "a5ecc468318200d76b6082b24ee03d62",
"assets/assets/images/tomo.png": "46c3a67812a6128893e367e985e2fd87",
"assets/assets/images/miota.png": "a467925d4896d11983d251307cbf404b",
"assets/assets/images/storj.png": "51e7f171ae120e29f8a20464c4b02393",
"assets/assets/images/cs.png": "5259d737c5e5dccc0695ad4141bec4d2",
"assets/assets/images/wax.png": "f336b577b0eed1221053731929089159",
"assets/assets/images/lbc.png": "ef30f889bfd21f1211be9943598ce6fb",
"assets/assets/images/bch.png": "fcec74d4529f678d785181c021bdd39d",
"assets/assets/images/grs.png": "43784e056b56db12fa81a02b20038215",
"assets/assets/images/zilla.png": "8840df6f68f076c09d78e113438c438f",
"assets/assets/images/wan.png": "78ee2d5fe79de021d77975cf5d73b537",
"assets/assets/images/gin.png": "deaa64f5205d401fc58d4d03b9cddf17",
"assets/assets/images/adx.png": "b7566b01243e5c1942432ed1e31b801c",
"assets/assets/images/pasc.png": "6374d910b3eec39ebe7c0d4bccecdd58",
"assets/assets/images/crw.png": "65e436e9a163a56075afeaa01df91fb5",
"assets/assets/images/drgn.png": "051826dbf2e360087760122b6a994c59",
"assets/assets/images/dat.png": "f11699bd9bac0d593a21a9b24d5e243a",
"assets/assets/images/san.png": "f5dafe2eabce1c7afbcb318471da7565",
"assets/assets/images/jnt.png": "dbaaa852b74d5d31bede7edec6618b69",
"assets/assets/images/gusd.png": "b36425b28a06ae13484c88a5c96a5c6e",
"assets/assets/images/zil.png": "e604427346bc1474e1d871f6f14eb677",
"assets/assets/images/via.png": "3f052a18571f76f06655e603277a9458",
"assets/assets/images/xem.png": "7e004b0253296fa46b89517b2f0d0502",
"assets/assets/images/d.png": "c67556b00717e410c3b5d871b073a9e8",
"assets/assets/images/part.png": "ff3b479b15f10f8dc0c3474dd818f45c",
"assets/assets/images/xin.png": "12e687ccab31ce9613a0d6a9715fda8a",
"assets/assets/images/tgch.png": "fe497a796c6778db08e797d466428dc1",
"assets/assets/images/bts.png": "68ecf9c88eeb839ceefbac6e3388316c",
"assets/assets/images/bela.png": "c96a734c07d98dfa28c9d897df7078b3",
"assets/assets/images/maid.png": "ab57ff7b7f1fe772a6f1043069387b5e",
"assets/assets/images/steem.png": "c3fa24b94953fe0bc3cab20cf51f15f7",
"assets/assets/images/chat.png": "4ac76bab7a95e237cfbffd634c1c77f2",
"assets/assets/images/edo.png": "56f34221075c68cef8f641c9003af867",
"assets/assets/images/req.png": "9a2a8414f1f5c71d52e48d31e08fef03",
"assets/assets/images/xmcc.png": "92612a3407920bc7b3e5b61fbbad7bb1",
"assets/assets/images/rep.png": "8d44a152dc4eef36796deef1798bb6ce",
"assets/assets/images/aywa.png": "9fbac6a2da9ffad911147e1541a98649",
"assets/assets/images/prl.png": "a22eb4f98f488604c5630d98e91e5ef2",
"assets/assets/images/lun.png": "69944276f012cf76e2869e47a1689420",
"assets/assets/images/r.png": "666fff09b0b12fd707c91f8ab724ca6f",
"assets/assets/images/vet.png": "c7e01cdd56d553aff2ab31e2cc01cabc",
"assets/assets/images/spank.png": "f4fe4208fc636813a29ed841931290f1",
"assets/assets/images/btcd.png": "196ca0cbdad67bb7866e7a14b02b22fa",
"assets/assets/images/xpm.png": "521815c44ddb20c2a3bd4cf1091fd9fd",
"assets/assets/images/zen.png": "a6b1538876730f433eb6607c81238da3",
"assets/assets/images/arg.png": "13e27e9f3956b7ffdbf6ca3ef33b1cbf",
"assets/assets/images/cix.png": "d07e9369b5d8b0388d77ed00b442f8b9",
"assets/assets/images/ast.png": "db9a7a102da5d9fddc6999bed5c132da",
"assets/assets/images/zel.png": "0ff65e251580b2874d265ac1f217963c",
"assets/assets/images/ftc.png": "956e38d6365858b77b2ba1e5da02e7d1",
"assets/assets/images/xrp.png": "2308acc5cb079e77004f6ae91cc7b051",
"assets/assets/images/start.png": "36c63c86b718e7d00dca04cb0c02767e",
"assets/assets/images/vib.png": "4e8ee2e2566f414debe6831a594d162f",
"assets/assets/images/dta.png": "fe87f9cf007d9bdf083bfd7956eaeb03",
"assets/assets/images/vibe.png": "1b4562f12b9b47362139a9fe7fb51d10",
"assets/assets/images/bq.png": "1e20bbe6bebe980ee506e8a639dab92e",
"assets/assets/images/tpay.png": "04112667a5d6496afb88a849798538f6",
"assets/assets/images/btg.png": "e573ff329ea6b1365b6216a8172c9126",
"assets/assets/images/apex.png": "1b316b76bd38349b66f46796fca69836",
"assets/assets/images/grc.png": "33399662e11edb64e61a1f2e35323016",
"assets/assets/images/bcn.png": "b0a3bf8c89a72573dfa95fcf933b2f30",
"assets/assets/images/ubq.png": "5c5190debb67c775632d0f7f423d28dc",
"assets/assets/images/bco.png": "47815ca7e5e5e5d9360a88a5bedb82c8",
"assets/assets/images/nano.png": "01ca3021d1822893b25246e360e61e3f",
"assets/assets/images/ppp.png": "e8a8768da0b8848ed1c77426908ec3ae",
"assets/assets/images/gold.png": "a1fc83095677640cc14b68dae18eb060",
"assets/assets/images/trtl.png": "6629b686c8dfb97b67561276acae2ce3",
"assets/assets/images/elix.png": "78754f516102f95d48dcc385d2ed1017",
"assets/assets/images/eql.png": "3cf06504a779658627cf403b363ec0df",
"assets/assets/images/utk.png": "154ef87bea519cfb30b99de84d7edcfa",
"assets/assets/images/cc.png": "41c8d4eb2cbc08029021d9fda2ea9baa",
"assets/assets/images/storm.png": "72dea0c2468abe2976f9383ebd8bc7f3",
"assets/assets/images/btcp.png": "acded7fa6fbe1940a07f26bad3322561",
"assets/assets/images/taas.png": "c5d9b65e0221e4640bb30c8d33548f56",
"assets/assets/images/mds.png": "d12ccf3a7dc8194fbd1a365c4dde0011",
"assets/assets/images/deez.png": "c71d233633983b582030d2a42a7af1ca",
"assets/assets/images/snt.png": "da039f52b67a2a76f9d5abcad3c8a597"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
