<template>
    <div class="container">
        <div class="center">
            <img src="https://datahub.haohuan.com/gfs/2021-11/c2f93a0ff6ebb6895bf797a528686292.png" alt="Vue.js" />
            <br />
            <h2>hfq-app-vue3</h2>
        </div>
    </div>
    <van-divider>网络信息</van-divider>
    <van-list>
        <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    <br />
    <van-divider>设备信息</van-divider>
    <van-list>
        <van-cell v-for="item in deviceInfolist" :key="item" :title="item" />
    </van-list>
    <br />
    <van-divider>项目路由表</van-divider>
    <van-list>
        <van-cell v-for="item in routes" :key="item.path" :title="item.meta.title" is-link :url="item.path" />
    </van-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { routes } from '@/router/router';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const list = ref<any[]>([]);
const deviceInfolist = ref<any[]>([]);
const url = window.location.href;
const host = window.location.host;
list.value.push(`域名：${host}`);
list.value.push(`URL：${url}`);
const ua = navigator.userAgent;
const system = ua.includes('Android')
    ? 'Android'
    : ua.includes('iPhone')
        ? 'iPhone'
        : 'unknown';
const osVersion =
    system !== 'unknown' &&
    ua.split(system === 'Android' ? 'Android ' : 'iPhone OS ')[1].split(';')[0];
const device =
    system === 'Android'
        ? ua.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0]
        : 'iPhone';
deviceInfolist.value.push(`系统：${system}`);
deviceInfolist.value.push(`版本：${osVersion || ''}`);
deviceInfolist.value.push(`设备：${device || ''}`);

const jumpTo = (item: any) => {
    router.push({
        name: item.name,
    })
}

</script>

<style scoped lang="scss">
.center {
    text-align: center;
}

.container {
    padding: 20px;
}
</style>
