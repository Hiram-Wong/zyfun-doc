<script setup lang="ts">
const random = Math.floor(Math.random() * 3 + 1)
</script>

<template>
<div class="VPDocAsideSponsors">
  <div class="VPSponsors vp-sponsor aside">
    <section class="vp-sponsor-section">
      <div class="VPSponsorsGrid vp-sponsor-grid mini" data-vp-grid="1">
        <div class="vp-sponsor-grid-item">
          <a class="vp-sponsor-grid-link" href="https://www.rainyun.com/hiram_?s=zyfun_wiki" target="_blank" rel="sponsored noopener">
            <article class="vp-sponsor-grid-box">
              <h4 class="visually-hidden">买服务器上雨云</h4>
              <img style="max-width:36px; border-radius: 2px;" src="/sponsor/raincloud.png" alt="sponsor-1">
              <span class="vp-sponsor-grid-text" style="margin-left: 8px;">由超大带宽雨云提供赞助</span>
            </article>
          </a>
        </div>
      </div>
    </section>
    <section class="vp-sponsor-section">
      <div class="VPSponsorsGrid vp-sponsor-grid xmini" data-vp-grid="2">
        <div class="vp-sponsor-grid-item">
          <a class="vp-sponsor-grid-link" href="https://tvshare.cn" target="_blank" rel="sponsored noopener">
            <article class="vp-sponsor-grid-box">
              <img style="max-width:36px; border-radius: 2px;" src="/sponsor/sp.png" alt="sponsor-1">
              <span class="vp-sponsor-grid-text">找源上源动力</span>
            </article>
          </a>
        </div>
        <!-- <div class="vp-sponsor-grid-item" v-if="random === 2">
          <a class="vp-sponsor-grid-link" href="/sponsor/" target="_blank" rel="sponsored noopener">
            <article class="vp-sponsor-grid-box">
              <span class="vp-sponsor-grid-text">Your Logo</span>
              <h4 class="visually-hidden">Your Logo</h4>
              <img class="vp-sponsor-grid-image" src="/electron-conf.svg" alt="electron-conf">
            </article>
          </a>
        </div> -->
        <!-- <div class="vp-sponsor-grid-item" v-if="random === 3">
          <a class="vp-sponsor-grid-link" href="/sponsor/" target="_blank" rel="sponsored noopener">
            <article class="vp-sponsor-grid-box">
              <span class="vp-sponsor-grid-text">Your Logo</span>
              <h4 class="visually-hidden">Your Logo</h4>
              <img class="vp-sponsor-grid-image" src="/sqlite3-queries.svg" alt="sqlite3-queries">
            </article>
          </a>
        </div> -->
        <div class="vp-sponsor-grid-item">
          <a class="vp-sponsor-grid-link" href="#" rel="sponsored noopener">
            <article class="vp-sponsor-grid-box">
              <span class="vp-sponsor-grid-text">在线要饭</span>
            </article>
          </a>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<style>
.vp-sponsor-grid-text {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.dark .vp-sponsor-grid-text {
  color: var(--vp-c-gray-1);
}
</style>
