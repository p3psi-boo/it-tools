<script setup lang="ts">
import InputCopyable from '../../components/InputCopyable.vue';

// 添加价格相关的响应式变量
const inputPrice = ref(2); // 默认输入价格 $2/1M tokens (原来是 0.002/1k)
const outputPrice = ref(2); // 默认输出价格 $2/1M tokens (原来是 0.002/1k)
const basePrice = ref(0.002); // 基准价格 $0.002/1k tokens
const groupMultiplier = ref(1);
const modelName = ref('');

// 计算模型倍率和补全倍率
const inputMultiplier = computed(() => inputPrice.value / (basePrice.value * 1000 * groupMultiplier.value));
const completionMultiplier = computed(() => outputPrice.value / (inputPrice.value * 1000 * groupMultiplier.value));
</script>

<template>
  <div>
    <!-- 价格输入部分 -->
    <n-form-item label="输入价格 ($/1M tokens):">
      <n-input-number v-model:value="inputPrice" :min="0" :step="0.1" :precision="6" />
    </n-form-item>

    <n-form-item label="输出价格 ($/1M tokens):">
      <n-input-number v-model:value="outputPrice" :min="0" :step="0.1" :precision="6" />
    </n-form-item>

    <n-divider />


    <n-form-item label="基准价格 ($/1k tokens，默认值为 OneAPI/NewAPI 的 0.002$/1k tokens):">
      <n-input-number v-model:value="basePrice" :min="0" :step="0.0001" :precision="6" />
    </n-form-item>

    <n-form-item label="分组倍率:">
      <n-input-number v-model:value="groupMultiplier" :min="0" :step="0.0001" :precision="6" />
    </n-form-item>

    <n-form-item label="模型名称">
      <n-input v-model:value="modelName" />
    </n-form-item>

    <n-divider />

    <!-- 显示计算结果 -->
    <InputCopyable label="模型倍率:" :value="inputMultiplier.toFixed(4)" />

    <InputCopyable label="补全倍率:" :value="completionMultiplier.toFixed(4)" />
  </div>
</template>
