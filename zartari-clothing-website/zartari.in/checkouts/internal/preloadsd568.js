
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.BsMG0zU8.js","cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CKm0_Vcp.js","cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe-legacy.Cv3aOmy9.js","cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6-legacy.WA0eakgJ.js","cdn/shopifycloud/checkout-web/assets/c1/3d539943-legacy.D5lq38iZ.js","cdn/shopifycloud/checkout-web/assets/c1/bfe75f31-legacy.24s8xrnR.js","cdn/shopifycloud/checkout-web/assets/c1/6f2620f5-legacy.CpONoCdw.js","cdn/shopifycloud/checkout-web/assets/c1/2255f8fa-legacy.D9ofgPfO.js","cdn/shopifycloud/checkout-web/assets/c1/204243fa-legacy.BXvABMt1.js","cdn/shopifycloud/checkout-web/assets/c1/f60da9b0-legacy.CFZXnPRZ.js","cdn/shopifycloud/checkout-web/assets/c1/f05935e5-legacy.D1QoP_U4.js","cdn/shopifycloud/checkout-web/assets/c1/7336bdaf-legacy.BB5cWJXW.js","cdn/shopifycloud/checkout-web/assets/c1/54c78614-legacy.Bwh4BgWx.js","cdn/shopifycloud/checkout-web/assets/c1/8b3289d0-legacy.BX-j2r3U.js","cdn/shopifycloud/checkout-web/assets/c1/b8733b27-legacy.8PCkGAit.js","cdn/shopifycloud/checkout-web/assets/c1/e39bc11c-legacy.CWr34QkL.js","cdn/shopifycloud/checkout-web/assets/c1/08a3b809-legacy.Dmv5Gwkf.js","cdn/shopifycloud/checkout-web/assets/c1/164ad2e3-legacy.SXdFj_pm.js","cdn/shopifycloud/checkout-web/assets/c1/69fae6d4-legacy.DHop5iiw.js","cdn/shopifycloud/checkout-web/assets/c1/5587f402-legacy.C8T3wZK_.js","cdn/shopifycloud/checkout-web/assets/c1/60a453ce-legacy.DVhfUTKJ.js","cdn/shopifycloud/checkout-web/assets/c1/fb3b4968-legacy.BdAgMCGx.js","cdn/shopifycloud/checkout-web/assets/c1/f8706cb6-legacy.B2aY_DrE.js","cdn/shopifycloud/checkout-web/assets/c1/0e9ee714-legacy.BKV2UWaa.js","cdn/shopifycloud/checkout-web/assets/c1/39921a74-legacy.BskNmrZK.js","cdn/shopifycloud/checkout-web/assets/c1/7a8217fd-legacy.YxJ_yMY8.js","cdn/shopifycloud/checkout-web/assets/c1/8599b02a-legacy.eOhMEUQz.js","cdn/shopifycloud/checkout-web/assets/c1/dffdfb34-legacy.CU2BMoJm.js","cdn/shopifycloud/checkout-web/assets/c1/a422df8c-legacy.BApDpXT9.js","cdn/shopifycloud/checkout-web/assets/c1/efa0389a-legacy.M42XEgja.js","cdn/shopifycloud/checkout-web/assets/c1/c8760fd8-legacy.Ca7Pgi9M.js","cdn/shopifycloud/checkout-web/assets/c1/53bbdad9-legacy.CzfScxLt.js","cdn/shopifycloud/checkout-web/assets/c1/1f5e7811-legacy.DuwCN8dK.js","cdn/shopifycloud/checkout-web/assets/c1/1a6c2867-legacy.Cbm-tTsI.js","cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3-legacy.xeEglqIV.js","cdn/shopifycloud/checkout-web/assets/c1/22345fd4-legacy.1By8pu4r.js","cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b-legacy.CyaTTbjR.js","cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda-legacy.DZu-6gGE.js","cdn/shopifycloud/checkout-web/assets/c1/ca3e798e-legacy.DfBmwodn.js","cdn/shopifycloud/checkout-web/assets/c1/f7861534-legacy.BPcFyPT2.js","cdn/shopifycloud/checkout-web/assets/c1/47b970b2-legacy.0ySBxey5.js","cdn/shopifycloud/checkout-web/assets/c1/064f6ac1-legacy.B8G_QtAN.js","cdn/shopifycloud/checkout-web/assets/c1/17425706-legacy.C9jPAvIE.js","cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c-legacy.BSVwDpRI.js","cdn/shopifycloud/checkout-web/assets/c1/cb5cf153-legacy.D9SpFQwE.js","cdn/shopifycloud/checkout-web/assets/c1/06ef5503-legacy.Bu-15B2y.js","cdn/shopifycloud/checkout-web/assets/c1/acc42fa8-legacy.Dubso4lA.js","cdn/shopifycloud/checkout-web/assets/c1/cccd6056-legacy.PkyxWuXd.js","cdn/shopifycloud/checkout-web/assets/c1/0b8657b8-legacy.CNUBFTyC.js","cdn/shopifycloud/checkout-web/assets/c1/79974aab-legacy.9cf0CnJO.js","cdn/shopifycloud/checkout-web/assets/c1/89e2d30a-legacy.B7pHvAlv.js","cdn/shopifycloud/checkout-web/assets/c1/ed9f2238-legacy.BqArF2Tm.js","cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8-legacy.D8i6WJOZ.js","cdn/shopifycloud/checkout-web/assets/c1/1444e6bd-legacy.D_TSWTLL.js","cdn/shopifycloud/checkout-web/assets/c1/55098bf1-legacy.DiNCyBA6.js","cdn/shopifycloud/checkout-web/assets/c1/f49d4216-legacy.agDXTKRS.js","cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea-legacy.BWACRfOE.js","cdn/shopifycloud/checkout-web/assets/c1/d22d2b80-legacy.aA-i1vlT.js","cdn/shopifycloud/checkout-web/assets/c1/f58f39d8-legacy.BEuxA1I1.js","cdn/shopifycloud/checkout-web/assets/c1/e03065ab-legacy.DzOi_OGn.js","cdn/shopifycloud/checkout-web/assets/c1/c09515bf-legacy.Dd7ZbvA4.js","cdn/shopifycloud/checkout-web/assets/c1/6bfea526-legacy.0b9ulRQH.js","cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff-legacy.DduSicH5.js","cdn/shopifycloud/checkout-web/assets/c1/598fef4e-legacy.MwVVPmdm.js","cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0-legacy.BnK0Rce3.js","cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d-legacy.Bknhv6za.js","cdn/shopifycloud/checkout-web/assets/c1/bf513f9c-legacy.CdkxLwAT.js","cdn/shopifycloud/checkout-web/assets/c1/dfca5da5-legacy.swE79qeB.js","cdn/shopifycloud/checkout-web/assets/c1/dae24aab-legacy.Dgs733P3.js","cdn/shopifycloud/checkout-web/assets/c1/ddf59287-legacy.CVJ8i-8k.js","cdn/shopifycloud/checkout-web/assets/c1/01973ac7-legacy.DDVyVua-.js","cdn/shopifycloud/checkout-web/assets/c1/58314944-legacy.BVbsQMuy.js","cdn/shopifycloud/checkout-web/assets/c1/9068a4ed-legacy.B5lrd8M7.js","cdn/shopifycloud/checkout-web/assets/c1/a25deb9a-legacy.Oqw7Rmdz.js","cdn/shopifycloud/checkout-web/assets/c1/2b89a178-legacy.DBV4l_ES.js","cdn/shopifycloud/checkout-web/assets/c1/b684bff6-legacy.CHmh1kv1.js","cdn/shopifycloud/checkout-web/assets/c1/d5d34b3b-legacy.OSjv2aVs.js","cdn/shopifycloud/checkout-web/assets/c1/910cd6e2-legacy.gSO_kXSq.js","cdn/shopifycloud/checkout-web/assets/c1/347b440c-legacy.CCMrWYNN.js","cdn/shopifycloud/checkout-web/assets/c1/5ade1ef3-legacy.Bqpv9QQH.js","cdn/shopifycloud/checkout-web/assets/c1/181d38d3-legacy.BabdFFOY.js","cdn/shopifycloud/checkout-web/assets/c1/5a347040-legacy.CUAswEcy.js","cdn/shopifycloud/checkout-web/assets/c1/792bb671-legacy.Bm978H5T.js","cdn/shopifycloud/checkout-web/assets/c1/9ca7d819-legacy.DjALO0cU.js","cdn/shopifycloud/checkout-web/assets/c1/f51e663e-legacy.C0dvnhWe.js","cdn/shopifycloud/checkout-web/assets/c1/21cc90a2-legacy.HPm1WO51.js","cdn/shopifycloud/checkout-web/assets/c1/64de7b49-legacy.CPRnA2Jg.js","cdn/shopifycloud/checkout-web/assets/c1/ca0c3e72-legacy.BmczxJuR.js","cdn/shopifycloud/checkout-web/assets/c1/8e79be58-legacy.YAJ6ELlJ.js","cdn/shopifycloud/checkout-web/assets/c1/90e26f5f-legacy.OIHycaQz.js","cdn/shopifycloud/checkout-web/assets/c1/31cc568e-legacy.DLFKTecT.js","cdn/shopifycloud/checkout-web/assets/c1/65f3d4da-legacy.BTzLamgy.js","cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49-legacy.DMhDIjoe.js","cdn/shopifycloud/checkout-web/assets/c1/f3e117aa-legacy.DLblCsaE.js","cdn/shopifycloud/checkout-web/assets/c1/7aefefff-legacy.BgJJNjIP.js","cdn/shopifycloud/checkout-web/assets/c1/b3389d5c-legacy.DdnoqJWU.js","cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0-legacy.DXD9ytBK.js","cdn/shopifycloud/checkout-web/assets/c1/86720dbb-legacy.BlaAcBL6.js","cdn/shopifycloud/checkout-web/assets/c1/0724c71d-legacy.DJgdifsS.js","cdn/shopifycloud/checkout-web/assets/c1/7114e006-legacy.CCgKFDsj.js","cdn/shopifycloud/checkout-web/assets/c1/9babe369-legacy.DhA_joeB.js","cdn/shopifycloud/checkout-web/assets/c1/434e3b0a-legacy.Crya1c9b.js","cdn/shopifycloud/checkout-web/assets/c1/e0989459-legacy.vw7ENdb9.js","cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6-legacy.DvdGhbth.js","cdn/shopifycloud/checkout-web/assets/c1/d2e6a587-legacy.F_4eI4_8.js","cdn/shopifycloud/checkout-web/assets/c1/ca3c8263-legacy.BFctJzlb.js","cdn/shopifycloud/checkout-web/assets/c1/083cdde5-legacy.Cv5CbpgF.js","cdn/shopifycloud/checkout-web/assets/c1/fe885b80-legacy.EpoBGSll.js","cdn/shopifycloud/checkout-web/assets/c1/f78726c8-legacy.DsJj6E4S.js","cdn/shopifycloud/checkout-web/assets/c1/d93ca466-legacy.M4LRU8o4.js","cdn/shopifycloud/checkout-web/assets/c1/e129c76e-legacy.q94cbqik.js","cdn/shopifycloud/checkout-web/assets/c1/051149c8-legacy.iFNzX2-Q.js","cdn/shopifycloud/checkout-web/assets/c1/d7065744-legacy.B2NdGsry.js","cdn/shopifycloud/checkout-web/assets/c1/7ee73f43-legacy.BR1q3_g3.js","cdn/shopifycloud/checkout-web/assets/c1/0c0ad074-legacy.w5Z3-JWF.js","cdn/shopifycloud/checkout-web/assets/c1/8fe56fc9-legacy.DqUKIFiB.js","cdn/shopifycloud/checkout-web/assets/c1/2210eadb-legacy.CbrxxALo.js","cdn/shopifycloud/checkout-web/assets/c1/e477f96c-legacy.DCWPuKa6.js","cdn/shopifycloud/checkout-web/assets/c1/87bfafec-legacy.DIYZtwjv.js","cdn/shopifycloud/checkout-web/assets/c1/ec391382-legacy.zY4eAwlu.js","cdn/shopifycloud/checkout-web/assets/c1/c6b02d73-legacy.BN00ANun.js","cdn/shopifycloud/checkout-web/assets/c1/71b60e0a-legacy.yv5cHNZ5.js","cdn/shopifycloud/checkout-web/assets/c1/24773686-legacy.uTdcLehV.js","cdn/shopifycloud/checkout-web/assets/c1/7048f38b-legacy.DFLQn41V.js","cdn/shopifycloud/checkout-web/assets/c1/c3c7c048-legacy.B4miLm3V.js","cdn/shopifycloud/checkout-web/assets/c1/7aa3b627-legacy.Chg9EXS-.js","cdn/shopifycloud/checkout-web/assets/c1/dada7e07-legacy.BncbC_nw.js","cdn/shopifycloud/checkout-web/assets/c1/c10167e6-legacy.iB-DWoqE.js","/cdn/shopifycloud/checkout-web/assets/c1/17e57de1-legacy.vqz7_kNs.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  