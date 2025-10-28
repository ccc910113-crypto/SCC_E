// ==================== 全域變數 ====================
// 接觸電阻測量品質分析 - 新數據結構（包含測量值1、測量值2、測量值3）
const circuitBreakerData = {
    // 根據新的CSV數據結構重新組織
    "量測數據": [
        // 21B652G 儀器數據 - 手法A
        {量測者: "涂X騰", 儀器編號: "21B652G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.1, 量測值3: 86.8},
        {量測者: "余O濤", 儀器編號: "21B652G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 87.1, 量測值2: 85.8, 量測值3: 86.9},
        {量測者: "洪O祥", 儀器編號: "21B652G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 86.1, 量測值2: 85.3, 量測值3: 85.1},
        {量測者: "游X潔", 儀器編號: "21B652G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 85.9, 量測值2: 85.7, 量測值3: 84.2},
        // 21B653G 儀器數據 - 手法A
        {量測者: "涂X騰", 儀器編號: "21B653G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.2, 量測值3: 86.7},
        {量測者: "余O濤", 儀器編號: "21B653G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 87.0, 量測值2: 86.8, 量測值3: 86.2},
        {量測者: "洪O祥", 儀器編號: "21B653G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 86.4, 量測值2: 85.9, 量測值3: 86.6},
        {量測者: "游X潔", 儀器編號: "21B653G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 86.7, 量測值2: 86.2, 量測值3: 86.7},
        // 23B531G 儀器數據 - 手法A
        {量測者: "涂X騰", 儀器編號: "23B531G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 84.6, 量測值2: 85.1, 量測值3: 84.9},
        {量測者: "余O濤", 儀器編號: "23B531G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 83.7, 量測值2: 83.1, 量測值3: 83.7},
        {量測者: "洪O祥", 儀器編號: "23B531G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 84.7, 量測值2: 85.1, 量測值3: 84.8},
        {量測者: "游X潔", 儀器編號: "23B531G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 85.8, 量測值2: 85.3, 量測值3: 85.5},
        // 23B532G 儀器數據 - 手法A
        {量測者: "涂X騰", 儀器編號: "23B532G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 85.9, 量測值2: 86.1, 量測值3: 86.6},
        {量測者: "余O濤", 儀器編號: "23B532G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.2, 量測值3: 86.0},
        {量測者: "洪O祥", 儀器編號: "23B532G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 85.7, 量測值2: 86.4, 量測值3: 85.9},
        {量測者: "游X潔", 儀器編號: "23B532G", 量測手法: "A", 組裝廠別: "精裝A", 量測值1: 85.1, 量測值2: 84.3, 量測值3: 84.7},
        // 21B652G 儀器數據 - 手法B
        {量測者: "涂X騰", 儀器編號: "21B652G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 97.2, 量測值2: 91.5, 量測值3: 98.1},
        {量測者: "余O濤", 儀器編號: "21B652G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 96.2, 量測值2: 98.4, 量測值3: 99.9},
        {量測者: "洪O祥", 儀器編號: "21B652G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 99.2, 量測值2: 97.2, 量測值3: 97.1},
        {量測者: "游X潔", 儀器編號: "21B652G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 98.6, 量測值2: 97.5, 量測值3: 99.5},
        // 21B653G 儀器數據 - 手法B
        {量測者: "涂X騰", 儀器編號: "21B653G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 100.8, 量測值2: 100.5, 量測值3: 101.1},
        {量測者: "余O濤", 儀器編號: "21B653G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 101.2, 量測值2: 100.7, 量測值3: 101.9},
        {量測者: "洪O祥", 儀器編號: "21B653G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 101.5, 量測值2: 102.4, 量測值3: 100.8},
        {量測者: "游X潔", 儀器編號: "21B653G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 100.8, 量測值2: 99.2, 量測值3: 100.6},
        // 23B531G 儀器數據 - 手法B
        {量測者: "涂X騰", 儀器編號: "23B531G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 99.6, 量測值2: 98.1, 量測值3: 98.8},
        {量測者: "余O濤", 儀器編號: "23B531G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 98.7, 量測值2: 97.5, 量測值3: 99.7},
        {量測者: "洪O祥", 儀器編號: "23B531G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 98.9, 量測值2: 97.2, 量測值3: 98.1},
        {量測者: "游X潔", 儀器編號: "23B531G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 98.5, 量測值2: 99.5, 量測值3: 99.1},
        // 23B532G 儀器數據 - 手法B
        {量測者: "涂X騰", 儀器編號: "23B532G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 99.1, 量測值2: 99.5, 量測值3: 98.5},
        {量測者: "余O濤", 儀器編號: "23B532G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 97.4, 量測值2: 97.3, 量測值3: 98.4},
        {量測者: "洪O祥", 儀器編號: "23B532G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 99.0, 量測值2: 98.2, 量測值3: 98.1},
        {量測者: "游X潔", 儀器編號: "23B532G", 量測手法: "B", 組裝廠別: "精裝A", 量測值1: 99.5, 量測值2: 98.4, 量測值3: 99.1},
        // 21B652G 儀器數據 - 手法C
        {量測者: "涂X騰", 儀器編號: "21B652G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.3, 量測值3: 85.4},
        {量測者: "余O濤", 儀器編號: "21B652G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 85.7, 量測值2: 85.1, 量測值3: 85.9},
        {量測者: "洪O祥", 儀器編號: "21B652G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.1, 量測值2: 85.9, 量測值3: 85.1},
        {量測者: "游X潔", 儀器編號: "21B652G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 85.7, 量測值2: 85.7, 量測值3: 85.9},
        // 21B653G 儀器數據 - 手法C
        {量測者: "涂X騰", 儀器編號: "21B653G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 87.5, 量測值2: 87.9, 量測值3: 87.7},
        {量測者: "余O濤", 儀器編號: "21B653G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 88.1, 量測值2: 89.2, 量測值3: 86.4},
        {量測者: "洪O祥", 儀器編號: "21B653G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 87.3, 量測值2: 88.1, 量測值3: 87.6},
        {量測者: "游X潔", 儀器編號: "21B653G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 88.3, 量測值2: 88.9, 量測值3: 89.2},
        // 23B531G 儀器數據 - 手法C
        {量測者: "涂X騰", 儀器編號: "23B531G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.3, 量測值2: 87.1, 量測值3: 86.8},
        {量測者: "余O濤", 儀器編號: "23B531G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.8, 量測值2: 87.2, 量測值3: 86.5},
        {量測者: "洪O祥", 儀器編號: "23B531G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.2, 量測值2: 86.8, 量測值3: 86.5},
        {量測者: "游X潔", 儀器編號: "23B531G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.9, 量測值2: 86.5, 量測值3: 86.5},
        // 23B532G 儀器數據 - 手法C
        {量測者: "涂X騰", 儀器編號: "23B532G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.1, 量測值3: 85.6},
        {量測者: "余O濤", 儀器編號: "23B532G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.2, 量測值2: 86.0, 量測值3: 85.9},
        {量測者: "洪O祥", 儀器編號: "23B532G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 85.2, 量測值2: 85.8, 量測值3: 85.0},
        {量測者: "游X潔", 儀器編號: "23B532G", 量測手法: "C", 組裝廠別: "精裝A", 量測值1: 86.1, 量測值2: 85.8, 量測值3: 86.3},
        // 21B652G 儀器數據 - 手法D
        {量測者: "涂X騰", 儀器編號: "21B652G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.1, 量測值3: 86.2},
        {量測者: "余O濤", 儀器編號: "21B652G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 85.7, 量測值2: 85.1, 量測值3: 85.9},
        {量測者: "洪O祥", 儀器編號: "21B652G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 86.1, 量測值2: 85.9, 量測值3: 85.1},
        {量測者: "游X潔", 儀器編號: "21B652G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 85.7, 量測值2: 85.7, 量測值3: 85.9},
        // 21B653G 儀器數據 - 手法D
        {量測者: "涂X騰", 儀器編號: "21B653G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 87.1, 量測值2: 86.9, 量測值3: 86.7},
        {量測者: "余O濤", 儀器編號: "21B653G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 86.8, 量測值2: 86.2, 量測值3: 86.4},
        {量測者: "洪O祥", 儀器編號: "21B653G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 86.3, 量測值2: 86.1, 量測值3: 86.8},
        {量測者: "游X潔", 儀器編號: "21B653G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 87.3, 量測值2: 86.9, 量測值3: 87.2},
        // 23B531G 儀器數據 - 手法D
        {量測者: "涂X騰", 儀器編號: "23B531G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 85.3, 量測值2: 85.1, 量測值3: 84.9},
        {量測者: "余O濤", 儀器編號: "23B531G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 84.7, 量測值2: 84.9, 量測值3: 84.6},
        {量測者: "洪O祥", 儀器編號: "23B531G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 85.2, 量測值2: 84.8, 量測值3: 84.8},
        {量測者: "游X潔", 儀器編號: "23B531G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 84.8, 量測值2: 85.0, 量測值3: 84.7},
        // 23B532G 儀器數據 - 手法D
        {量測者: "涂X騰", 儀器編號: "23B532G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 85.9, 量測值2: 86.1, 量測值3: 85.6},
        {量測者: "余O濤", 儀器編號: "23B532G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 86.5, 量測值2: 86.2, 量測值3: 85.9},
        {量測者: "洪O祥", 儀器編號: "23B532G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 84.7, 量測值2: 85.2, 量測值3: 85.0},
        {量測者: "游X潔", 儀器編號: "23B532G", 量測手法: "D", 組裝廠別: "精裝A", 量測值1: 86.1, 量測值2: 85.8, 量測值3: 85.7}
    ]
};

// 標準值設定 - 接觸電阻測量標準 (更新後)
const specLimits = {
    // 新量測值標準（適用於 量測值1/2/3）
    "量測值1": {
        "下限值": 78.7,
        "標準值下限": 84.5,
        "標準值上限": 87.0,
        "上限值": 96.2
    },
    "量測值2": {
        "下限值": 78.7,
        "標準值下限": 84.5,
        "標準值上限": 87.0,
        "上限值": 96.2
    },
    "量測值3": {
        "下限值": 78.7,
        "標準值下限": 84.5,
        "標準值上限": 87.0,
        "上限值": 96.2
    }
};

// 計算統計數據的函數
function calculateStats(data) {
    const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (data.length - 1);
    const stdDev = Math.sqrt(variance);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    
    return { mean, stdDev, min, max, range, n: data.length };
}

// 檢測異常值並診斷原因的函數
function detectOutliersWithDiagnosis(data, mean, stdDev, usl, lsl) {
    const threshold = 3; // 3σ原則
    const outliers = [];
    
    data.forEach((val, idx) => {
        if (Math.abs(val - mean) > threshold * stdDev || (usl && val > usl) || (lsl && val < lsl)) {
            let diagnosis = '';
            let severity = 'warning';
            
            // 狀況1：接觸電阻超出標準範圍
            if (usl && val > usl) {
                diagnosis = '接觸電阻過高';
                severity = 'critical';
            }
            else if (lsl && val < lsl) {
                diagnosis = '接觸電阻過低';
                severity = 'critical';
            }
            // 狀況2：測量值變異過大
            else if (Math.abs(val - mean) > stdDev * 2) {
                diagnosis = '測量變異過大';
                severity = 'warning';
            }
            // 狀況3：測量手法不一致
            else if (Math.abs(val - mean) > stdDev * 1.5) {
                diagnosis = '測量手法不一致';
                severity = 'caution';
            }
            
            outliers.push({
                value: val,
                index: idx,
                diagnosis: diagnosis,
                severity: severity,
                deviation: ((val - mean) / mean * 100).toFixed(1)
            });
        }
    });
    
    return outliers;
}

// 生成SPC數據結構 - 更新為新數據格式
const spcData = {};
const phaseBreakdown = {};

// 量測手法說明對應表
const methodDescriptions = {
    'A': '電流夾及電壓夾碰觸導體',
    'B': '電流及電壓夾同一點位置',
    'C': '電流夾螺絲，電壓碰觸導體',
    'D': '電流及電壓分別夾獨立螺絲'
};

function getMethodDescription(methodLetter) {
    return methodDescriptions[methodLetter] || '';
}

// 處理新的數據結構
const measurementData = circuitBreakerData["量測數據"];

// 按儀器編號和量測者分組處理數據，並按照A、B、C、D順序排列
const groupedByInstrumentAndMeasurer = {};
measurementData.forEach(record => {
    const instrument = record.儀器編號;
    const measurer = record.量測者;
    const method = record.量測手法;
    const key = `${instrument}-${measurer}`;
    
    if (!groupedByInstrumentAndMeasurer[key]) {
        groupedByInstrumentAndMeasurer[key] = {
            儀器編號: instrument,
            量測者: measurer,
            量測值1: [],
            量測值2: [],
            量測值3: [],
            測量手法順序: [] // 記錄測量手法的順序
        };
    }
    
    // 記錄測量手法順序
    groupedByInstrumentAndMeasurer[key].測量手法順序.push(method);
    
    // 添加測量值數據
    if (record.量測值1 !== null && record.量測值1 !== undefined) {
        groupedByInstrumentAndMeasurer[key].量測值1.push(record.量測值1);
    }
    if (record.量測值2 !== null && record.量測值2 !== undefined) {
        groupedByInstrumentAndMeasurer[key].量測值2.push(record.量測值2);
    }
    if (record.量測值3 !== null && record.量測值3 !== undefined) {
        groupedByInstrumentAndMeasurer[key].量測值3.push(record.量測值3);
    }
});

// 為每個儀器-量測者組合和測量項目生成統計數據
Object.keys(groupedByInstrumentAndMeasurer).forEach(key => {
    const data = groupedByInstrumentAndMeasurer[key];
    const instrument = data.儀器編號;
    const measurer = data.量測者;
    
    // 處理量測值1
    const measurement1Stats = calculateStats(data.量測值1);
    const measurement1Limits = {上限值: specLimits['量測值1'].上限值, 下限值: specLimits['量測值1'].下限值};
    const measurement1Outliers = detectOutliersWithDiagnosis(data.量測值1, measurement1Stats.mean, measurement1Stats.stdDev, measurement1Limits.上限值, measurement1Limits.下限值);
    
    const measurement1Ucl = measurement1Stats.mean + 3 * measurement1Stats.stdDev;
    const measurement1Lcl = Math.max(0, measurement1Stats.mean - 3 * measurement1Stats.stdDev);
    const measurement1Cpu = (measurement1Limits.上限值 - measurement1Stats.mean) / (3 * measurement1Stats.stdDev);
    const measurement1Cpl = (measurement1Stats.mean - measurement1Limits.下限值) / (3 * measurement1Stats.stdDev);
    const measurement1Cpk = Math.min(measurement1Cpu, measurement1Cpl);
    
    const measurement1Key = `${instrument}-${measurer}-量測值1`;
    spcData[measurement1Key] = {
        n: measurement1Stats.n,
        mean: measurement1Stats.mean,
        stdDev: measurement1Stats.stdDev,
        range: measurement1Stats.range,
        usl: measurement1Limits.上限值,
        lsl: measurement1Limits.下限值,
        ucl: measurement1Ucl,
        lcl: measurement1Lcl,
        outliers: measurement1Outliers.length,
        cpu: measurement1Cpu,
        cpk: measurement1Cpk,
        singleSided: false,
        measurements: data.量測值1
    };
    
    phaseBreakdown[measurement1Key] = {
        project: instrument,
        operation: "量測值1",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "量測值1",
        n: measurement1Stats.n,
        mean: measurement1Stats.mean,
        stdDev: measurement1Stats.stdDev,
        range: measurement1Stats.range,
        min: measurement1Stats.min,
        max: measurement1Stats.max,
        usl: measurement1Limits.上限值,
        lsl: measurement1Limits.下限值,
        ucl: measurement1Ucl,
        lcl: measurement1Lcl,
        outliers: measurement1Outliers.length,
        outliersValues: measurement1Outliers.map(o => o.value),
        outliersDiagnosis: measurement1Outliers,
        cpu: measurement1Cpu,
        cpl: measurement1Cpl,
        cpk: measurement1Cpk,
        singleSided: false,
        measurements: data.量測值1
    };
    
    // 處理量測值2
    const measurement2Stats = calculateStats(data.量測值2);
    const measurement2Limits = {上限值: specLimits['量測值2'].上限值, 下限值: specLimits['量測值2'].下限值};
    const measurement2Outliers = detectOutliersWithDiagnosis(data.量測值2, measurement2Stats.mean, measurement2Stats.stdDev, measurement2Limits.上限值, measurement2Limits.下限值);
    
    const measurement2Ucl = measurement2Stats.mean + 3 * measurement2Stats.stdDev;
    const measurement2Lcl = Math.max(0, measurement2Stats.mean - 3 * measurement2Stats.stdDev);
    const measurement2Cpu = (measurement2Limits.上限值 - measurement2Stats.mean) / (3 * measurement2Stats.stdDev);
    const measurement2Cpl = (measurement2Stats.mean - measurement2Limits.下限值) / (3 * measurement2Stats.stdDev);
    const measurement2Cpk = Math.min(measurement2Cpu, measurement2Cpl);
    
    const measurement2Key = `${instrument}-${measurer}-量測值2`;
    spcData[measurement2Key] = {
        n: measurement2Stats.n,
        mean: measurement2Stats.mean,
        stdDev: measurement2Stats.stdDev,
        range: measurement2Stats.range,
        usl: measurement2Limits.上限值,
        lsl: measurement2Limits.下限值,
        ucl: measurement2Ucl,
        lcl: measurement2Lcl,
        outliers: measurement2Outliers.length,
        cpu: measurement2Cpu,
        cpk: measurement2Cpk,
        singleSided: false,
        measurements: data.量測值2
    };
    
    phaseBreakdown[measurement2Key] = {
        project: instrument,
        operation: "量測值2",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "量測值2",
        n: measurement2Stats.n,
        mean: measurement2Stats.mean,
        stdDev: measurement2Stats.stdDev,
        range: measurement2Stats.range,
        min: measurement2Stats.min,
        max: measurement2Stats.max,
        usl: measurement2Limits.上限值,
        lsl: measurement2Limits.下限值,
        ucl: measurement2Ucl,
        lcl: measurement2Lcl,
        outliers: measurement2Outliers.length,
        outliersValues: measurement2Outliers.map(o => o.value),
        outliersDiagnosis: measurement2Outliers,
        cpu: measurement2Cpu,
        cpl: measurement2Cpl,
        cpk: measurement2Cpk,
        singleSided: false,
        measurements: data.量測值2
    };
    
    // 處理量測值3
    const measurement3Stats = calculateStats(data.量測值3);
    const measurement3Limits = {上限值: specLimits['量測值3'].上限值, 下限值: specLimits['量測值3'].下限值};
    const measurement3Outliers = detectOutliersWithDiagnosis(data.量測值3, measurement3Stats.mean, measurement3Stats.stdDev, measurement3Limits.上限值, measurement3Limits.下限值);
    
    const measurement3Ucl = measurement3Stats.mean + 3 * measurement3Stats.stdDev;
    const measurement3Lcl = Math.max(0, measurement3Stats.mean - 3 * measurement3Stats.stdDev);
    const measurement3Cpu = (measurement3Limits.上限值 - measurement3Stats.mean) / (3 * measurement3Stats.stdDev);
    const measurement3Cpl = (measurement3Stats.mean - measurement3Limits.下限值) / (3 * measurement3Stats.stdDev);
    const measurement3Cpk = Math.min(measurement3Cpu, measurement3Cpl);
    
    const measurement3Key = `${instrument}-${measurer}-量測值3`;
    spcData[measurement3Key] = {
        n: measurement3Stats.n,
        mean: measurement3Stats.mean,
        stdDev: measurement3Stats.stdDev,
        range: measurement3Stats.range,
        usl: measurement3Limits.上限值,
        lsl: measurement3Limits.下限值,
        ucl: measurement3Ucl,
        lcl: measurement3Lcl,
        outliers: measurement3Outliers.length,
        cpu: measurement3Cpu,
        cpk: measurement3Cpk,
        singleSided: false,
        measurements: data.量測值3
    };
    
    phaseBreakdown[measurement3Key] = {
        project: instrument,
        operation: "量測值3",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "量測值3",
        n: measurement3Stats.n,
        mean: measurement3Stats.mean,
        stdDev: measurement3Stats.stdDev,
        range: measurement3Stats.range,
        min: measurement3Stats.min,
        max: measurement3Stats.max,
        usl: measurement3Limits.上限值,
        lsl: measurement3Limits.下限值,
        ucl: measurement3Ucl,
        lcl: measurement3Lcl,
        outliers: measurement3Outliers.length,
        outliersValues: measurement3Outliers.map(o => o.value),
        outliersDiagnosis: measurement3Outliers,
        cpu: measurement3Cpu,
        cpl: measurement3Cpl,
        cpk: measurement3Cpk,
        singleSided: false,
        measurements: data.量測值3
    };
});

let currentSection = 'overview';
let selectedProject = '21B652G';
let selectedMeasurer = '涂X騰'; // 預設量測者為涂X騰
let selectedMeasurement = '量測值1';
let selectedGroupKey = '21B652G-涂X騰-量測值1';

// 直方圖變數
let selectedHistogramProject = '21B652G';
let selectedHistogramGroup = '涂X騰';
let selectedHistogramMeasurement = '量測值1';

// 散佈圖變數
let selectedScatterProject = '21B652G';
let selectedScatterGroup = '涂X騰';
let selectedScatterX = '量測值1';
let selectedScatterY = '量測值2';

const projects = ['21B652G', '21B653G', '23B531G', '23B532G'];

let controlChart = null;
let histogramChart = null;
let scatterChart = null;
let paretoChart = null;

// ==================== 全域函數 ====================
function showSection(sectionId) {
    console.log('Switching to section:', sectionId);
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 找到被點擊的按鈕並加上 active 類別
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.onclick && tab.onclick.toString().includes(sectionId)) {
            tab.classList.add('active');
        }
    });
    
    currentSection = sectionId;
    
    setTimeout(() => {
        switch(sectionId) {
            case 'control-charts':
                updateControlChart();
                break;
            case 'histogram':
                updateHistogram();
                break;
            case 'scatter':
                updateScatterPlot();
                break;
            case 'pareto':
                updateParetoChart();
                break;
        }
    }, 200);
}

function selectProject(project) {
    selectedProject = project;
    // 檢查當前選擇的量測者是否在新儀器編號中可用
    const availableMeasurers = getAvailableMeasurers(project);
    // 如果當前量測者不可用，則嘗試使用涂X騰，如果涂X騰也不可用，則使用第一個可用的量測者
    if (!availableMeasurers.includes(selectedMeasurer)) {
        if (availableMeasurers.includes('涂X騰')) {
            selectedMeasurer = '涂X騰';
        } else if (availableMeasurers.length > 0) {
            selectedMeasurer = availableMeasurers[0];
        } else {
            selectedMeasurer = null;
        }
    }
    updateActiveButtons('#projectButtons .control-btn', project);
    initializeControls(); // 重新初始化控制面板
    updateControlChart();
}


function selectMeasurer(measurer) {
    selectedMeasurer = measurer;
    selectedMeasurement = '量測值1'; // 設定預設測量值
    
    updateActiveButtons('#groupButtons .control-btn', measurer);
    initializeControls(); // 重新初始化控制面板
    updateControlChart();
}

function selectMeasurement(measurement) {
    selectedMeasurement = measurement;
    updateActiveButtons('#measurementButtons .control-btn', measurement);
    updateControlChart();
}

// 直方圖選擇函數
function selectHistogramProject(project) {
    selectedHistogramProject = project;
    // 檢查當前選擇的量測者是否在新儀器編號中可用
    const availableMeasurers = getAvailableMeasurers(project);
    if (!availableMeasurers.includes(selectedHistogramGroup)) {
        if (availableMeasurers.includes('涂X騰')) {
            selectedHistogramGroup = '涂X騰';
        } else if (availableMeasurers.length > 0) {
            selectedHistogramGroup = availableMeasurers[0];
        } else {
            selectedHistogramGroup = null;
        }
    }
    updateActiveButtons('#histogramProjectButtons .control-btn', project);
    initializeHistogramControls(); // 重新初始化控制面板
    updateHistogram();
}

function selectHistogramGroup(group) {
    selectedHistogramGroup = group;
    selectedHistogramMeasurement = '量測值1'; // 設定預設測量值
    
    updateActiveButtons('#histogramGroupButtons .control-btn', group);
    initializeHistogramControls(); // 重新初始化控制面板
    updateHistogram();
}

function selectHistogramMeasurement(measurement) {
    selectedHistogramMeasurement = measurement;
    updateActiveButtons('#histogramMeasurementButtons .control-btn', measurement);
    updateHistogram();
}

// 散佈圖選擇函數
function selectScatterProject(project) {
    selectedScatterProject = project;
    // 檢查當前選擇的量測者是否在新儀器編號中可用
    const availableMeasurers = getAvailableMeasurers(project);
    if (!availableMeasurers.includes(selectedScatterGroup)) {
        if (availableMeasurers.includes('涂X騰')) {
            selectedScatterGroup = '涂X騰';
        } else if (availableMeasurers.length > 0) {
            selectedScatterGroup = availableMeasurers[0];
        } else {
            selectedScatterGroup = null;
        }
    }
    updateActiveButtons('#scatterProjectButtons .control-btn', project);
    initializeScatterControls(); // 重新初始化控制面板
    updateScatterPlot();
}


function selectScatterGroup(group) {
    selectedScatterGroup = group;
    selectedScatterX = '量測值1'; // 設定預設測量值
    selectedScatterY = '量測值2'; // 設定預設測量值
    
    updateActiveButtons('#scatterGroupButtons .control-btn', group);
    initializeScatterControls(); // 重新初始化控制面板
    updateScatterPlot();
}

function selectScatterX(measurement) {
    selectedScatterX = measurement;
    updateActiveButtons('#scatterXMeasurementButtons .control-btn', measurement);
    updateScatterPlot();
}

function selectScatterY(measurement) {
    selectedScatterY = measurement;
    updateActiveButtons('#scatterYMeasurementButtons .control-btn', measurement);
    updateScatterPlot();
}

function updateActiveButtons(selector, value) {
    console.log('Updating buttons:', selector, 'with value:', value);
    const buttons = document.querySelectorAll(selector);
    console.log('Found buttons:', buttons.length);
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim();
        const btnValue = btn.dataset.value;
        console.log('Button text:', btnText, 'Button value:', btnValue, 'Target:', value);
        
        if (btnText === value || btnValue === value) {
            btn.classList.add('active');
            console.log('Activated button:', btnText || btnValue);
        }
    });
}

// ==================== 圖表更新函數 ====================
function updateControlChart() {
    console.log('Updating control chart...');
    console.log('Selected Project:', selectedProject);
    console.log('Selected Measurer:', selectedMeasurer);
    console.log('Selected Measurement:', selectedMeasurement);
    
    // 根據測量值選擇決定使用哪個數據
    let dataKey;
    if (selectedMeasurement === '量測值1') {
        dataKey = `${selectedProject}-${selectedMeasurer}-量測值1`;
    } else if (selectedMeasurement === '量測值2') {
        dataKey = `${selectedProject}-${selectedMeasurer}-量測值2`;
    } else if (selectedMeasurement === '量測值3') {
        dataKey = `${selectedProject}-${selectedMeasurer}-量測值3`;
    } else {
        dataKey = `${selectedProject}-${selectedMeasurer}-量測值1`;
    }
    
    console.log('Data Key:', dataKey);
    
    const data = phaseBreakdown[dataKey];
    
    if (!data) {
        console.log(`No data found for ${dataKey}`);
        return;
    }
    
    const titleElement = document.getElementById('controlChartTitle');
    if (titleElement) {
        let title;
        const methodOrder = data.methodOrder || ['A', 'B', 'C', 'D']; // 預設順序
        const methodString = methodOrder.join(', ');
        if (selectedMeasurement === '量測值1') {
            title = `${selectedProject}-${selectedMeasurer}-量測值1 (手法${methodString}) 管制圖`;
        } else if (selectedMeasurement === '量測值2') {
            title = `${selectedProject}-${selectedMeasurer}-量測值2 (手法${methodString}) 管制圖`;
        } else if (selectedMeasurement === '量測值3') {
            title = `${selectedProject}-${selectedMeasurer}-量測值3 (手法${methodString}) 管制圖`;
        } else {
            title = `${selectedProject}-${selectedMeasurer}-量測值1 (手法${methodString}) 管制圖`;
        }
        titleElement.textContent = title;
    }
    
    if (controlChart) {
        controlChart.destroy();
        controlChart = null;
    }
    
    const canvas = document.getElementById('controlChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 使用實際測量數據
    const measurementData = data.measurements;
    const methodOrder = data.methodOrder || ['A', 'B', 'C', 'D'];
    const labels = Array.from({length: measurementData.length}, (_, i) => `No.${i + 1} (${methodOrder[i] || 'A'})`);
    
    // 標註異常值
    const pointColors = measurementData.map(value => {
        if (data.outliersValues && data.outliersValues.includes(value)) {
            return '#ef4444'; // 紅色標記異常值
        }
        return '#2563eb'; // 一般點改為藍色
    });
    
    controlChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '測量值',
                    data: measurementData,
                    borderColor: '#2563eb', // 折線改為藍色
                    backgroundColor: pointColors.map(color => color + '40'),
                    pointBackgroundColor: pointColors,
                    pointBorderColor: pointColors, // 外框顏色與點顏色一致（異常為紅色）
                    borderWidth: 2,
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    fill: false
                },
                {
                    label: '標準值',
                    data: new Array(measurementData.length).fill(data.mean),
                    borderColor: '#10b981',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: '上限值',
                    data: new Array(measurementData.length).fill(data.usl),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [10, 5]
                },
                {
                    label: '下限值',
                    data: new Array(measurementData.length).fill(data.lsl),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [10, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            resizeDelay: 200,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1f2937',
                    bodyColor: '#4b5563',
                    borderColor: '#d1d5db',
                    borderWidth: 1,
                    callbacks: {
                        title: function(tooltipItems) {
                            const methodOrder = data.methodOrder || ['A', 'B', 'C', 'D'];
                            const index = tooltipItems[0].dataIndex;
                            const method = methodOrder[index] || 'A';
                            const desc = getMethodDescription(method);
                            return `${tooltipItems[0].label} - 手法${method}${desc ? '（' + desc + '）' : ''}`;
                        },
                        afterBody: function(tooltipItems) {
                            const value = tooltipItems[0].raw;
                            if (data.outliersValues && data.outliersValues.includes(value)) {
                                return ['', '⚠️ 異常值 (超出3σ界限)'];
                            }
                            if (data.usl && value > data.usl) {
                                return ['', '🚫 超出規格上限'];
                            }
                            if (data.lsl && value < data.lsl) {
                                return ['', '🚫 超出規格下限'];
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxTicksLimit: 8,
                        font: { size: 10 }
                    }
                },
                y: {
                    beginAtZero: false,
                    max: 105,
                    ticks: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });

    // 針對目前選擇，顯示精簡版在地異常說明
    const briefEl = document.getElementById('localOutlierBrief');
    if (briefEl) {
        const key = selectedGroupKey;
        const d = phaseBreakdown[key];
        if (d && (d.outliers || 0) > 0) {
            // 估算各手法異常數（透過 outlier index 對應 methodOrder）
            const counts = { A: 0, B: 0, C: 0, D: 0 };
            const methodOrder = d.methodOrder || [];
            (d.outliersDiagnosis || []).forEach(o => {
                const idx = typeof o.index === 'number' ? o.index : null;
                const method = (idx !== null && methodOrder[idx]) ? methodOrder[idx] : methodOrder[0];
                if (method && counts[method] !== undefined) counts[method]++;
            });
            const top = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
            briefEl.style.display = 'block';
            briefEl.innerHTML = `目前選擇：異常 ${d.outliers} 個，主要集中於手法 <strong>${top ? top[0] : '—'}</strong>`;
        } else {
            briefEl.style.display = 'none';
            briefEl.textContent = '';
        }
    }
}

function updateHistogram() {
    console.log('Updating histogram...');
    console.log('Selected Histogram Project:', selectedHistogramProject);
    console.log('Selected Histogram Group:', selectedHistogramGroup);
    console.log('Selected Histogram Measurement:', selectedHistogramMeasurement);
    
    // 構建選擇的群組鍵 - 使用新的數據結構
    let groupKey;
    if (selectedHistogramMeasurement === '量測值1') {
        groupKey = `${selectedHistogramProject}-${selectedHistogramGroup}-量測值1`;
    } else if (selectedHistogramMeasurement === '量測值2') {
        groupKey = `${selectedHistogramProject}-${selectedHistogramGroup}-量測值2`;
    } else if (selectedHistogramMeasurement === '量測值3') {
        groupKey = `${selectedHistogramProject}-${selectedHistogramGroup}-量測值3`;
    } else {
        groupKey = `${selectedHistogramProject}-${selectedHistogramGroup}-量測值1`;
    }
    
    console.log('Histogram Group Key:', groupKey);
    console.log('Available keys in phaseBreakdown:', Object.keys(phaseBreakdown));
    console.log('Sample keys:', Object.keys(phaseBreakdown).slice(0, 5));
    
    const data = phaseBreakdown[groupKey];
    
    if (!data) {
        console.log(`No data found for ${groupKey}`);
        return;
    }
    
    console.log('Histogram data found:', data);
    
    const titleElement = document.getElementById('histogramTitle');
    if (titleElement) {
        let title = `${selectedHistogramProject}-${selectedHistogramGroup}`;
        if (selectedHistogramMeasurement) {
            title += `-${selectedHistogramMeasurement}`;
        }
        title += ` 分布直方圖`;
        titleElement.textContent = title;
    }
    
    if (histogramChart) {
        histogramChart.destroy();
        histogramChart = null;
    }
    
    const canvas = document.getElementById('histogramChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 使用實際測量數據
    const histogramData = data.measurements || generateMeasurementData(data.mean, data.stdDev, 100);
    const skew = computeSkewness(histogramData);
    
    const info = document.getElementById('histogramPhaseInfo');
    if (info) {
        const shape = Math.abs(skew) < 0.5 ? '接近常態分布，品質穩定' : (skew > 0 ? '右偏，可能存在較大值尾端' : '左偏，可能存在較小值尾端');
        info.textContent = `顯示各測量項目數據分布形狀：${shape}（偏態 ${skew.toFixed(2)}）。`;
    }
    const bins = createHistogramBins(histogramData, 10);
    
    histogramChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bins.map(bin => bin.label),
            datasets: [{
                label: '頻次',
                data: bins.map(bin => bin.count),
                backgroundColor: getMeasurementColor(selectedHistogramMeasurement) + '80',
                borderColor: getMeasurementColor(selectedHistogramMeasurement),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            resizeDelay: 200,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        font: { size: 10 }
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });
}

function updateScatterPlot() {
    console.log('Updating scatter plot...');
    console.log('Selected Scatter Project:', selectedScatterProject);
    console.log('Selected Scatter Group:', selectedScatterGroup);
    console.log('Selected Scatter X:', selectedScatterX);
    console.log('Selected Scatter Y:', selectedScatterY);
    
    const titleElement = document.getElementById('scatterTitle');
    if (titleElement) {
        let title = `${selectedScatterProject}-${selectedScatterGroup}`;
        title += `-${selectedScatterX} vs ${selectedScatterY} 散布圖分析`;
        titleElement.textContent = title;
    }
    
    const phaseInfo = document.getElementById('scatterPhaseInfo');
    if (phaseInfo) {
        phaseInfo.textContent = `觀察${selectedScatterX}與${selectedScatterY}之間的相關性...`;
    }
    
    if (scatterChart) {
        scatterChart.destroy();
        scatterChart = null;
    }
    
    const canvas = document.getElementById('scatterChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 生成散布圖數據
    const dataPoints = [];
    
    // 構建X軸和Y軸的群組鍵 - 使用新的數據結構
    let xGroupKey, yGroupKey;
    if (selectedScatterX === '量測值1') {
        xGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值1`;
    } else if (selectedScatterX === '量測值2') {
        xGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值2`;
    } else if (selectedScatterX === '量測值3') {
        xGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值3`;
    } else {
        xGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值1`;
    }
    
    if (selectedScatterY === '量測值1') {
        yGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值1`;
    } else if (selectedScatterY === '量測值2') {
        yGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值2`;
    } else if (selectedScatterY === '量測值3') {
        yGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值3`;
    } else {
        yGroupKey = `${selectedScatterProject}-${selectedScatterGroup}-量測值1`;
    }
    
    console.log('X Group Key:', xGroupKey);
    console.log('Y Group Key:', yGroupKey);
    console.log('Available keys in phaseBreakdown:', Object.keys(phaseBreakdown));
    
    const xData = phaseBreakdown[xGroupKey];
    const yData = phaseBreakdown[yGroupKey];
    
    console.log('X Data:', xData);
    console.log('Y Data:', yData);
    
    if (xData && yData && xData.measurements && yData.measurements) {
        const minLength = Math.min(xData.measurements.length, yData.measurements.length);
        // 優先使用X的手法順序，沒有就退回預設 A-D
        const methodOrder = (xData.methodOrder && xData.methodOrder.length === minLength)
            ? xData.methodOrder
            : ['A','B','C','D'].slice(0, minLength);
        for (let i = 0; i < minLength; i++) {
            dataPoints.push({
                x: xData.measurements[i],
                y: yData.measurements[i],
                project: selectedScatterProject,
                method: methodOrder[i]
            });
        }
    }
    
    // 計算相關係數（以實際點計算）
    let correlation = NaN;
    if (dataPoints.length >= 2) {
        correlation = calculateCorrelation(dataPoints);
    }
    
    // 更新統計資訊
    const correlationElement = document.getElementById('correlationValue');
    if (correlationElement) {
        correlationElement.textContent = isFinite(correlation) ? correlation.toFixed(2) : '—';
    }
    // 動態更新關聯分析說明
    if (phaseInfo) {
        if (!isFinite(correlation)) {
            phaseInfo.textContent = `資料點數不足，暫無法評估 ${selectedScatterX} 與 ${selectedScatterY} 的相關性。`;
        } else {
            let levelText = '';
            if (Math.abs(correlation) >= 0.8) levelText = '高度相關，品質穩定';
            else if (Math.abs(correlation) >= 0.5) levelText = '中度相關，整體一致性良好';
            else levelText = '低度相關，建議持續觀察';
            phaseInfo.textContent = `測量項目關聯分析：r = ${correlation.toFixed(2)}，${levelText}。`;
        }
    }

    // 相關性分析卡片細節（與上方敘述一致）
    const consistencyDetails = document.getElementById('consistencyDetails');
    if (consistencyDetails) {
        if (!isFinite(correlation)) {
            consistencyDetails.innerHTML = `• 相關係數: —<br>• 分析: 資料點不足<br>• 建議: 擴充樣本後再評估`;
        } else {
            const strength = Math.abs(correlation) >= 0.8 ? '高度相關' : (Math.abs(correlation) >= 0.5 ? '中度相關' : '低度相關');
            const advice = Math.abs(correlation) >= 0.5 ? '維持現有測量標準' : '持續觀察並檢視手法一致性';
            consistencyDetails.innerHTML = `• 相關係數: ${correlation.toFixed(2)}<br>• 分析: ${strength}<br>• 建議: ${advice}`;
        }
    }

    // 品質狀況評估（依目前選擇的 X/Y 群組異常率）
    const riskLevelEl = document.getElementById('riskLevel');
    const riskDetails = document.getElementById('riskDetails');
    if (riskLevelEl && riskDetails) {
        let localOutliers = 0;
        let localN = 0;
        if (xData) { localOutliers += (xData.outliers || 0); localN += (xData.n || 0); }
        if (yData) { localOutliers += (yData.outliers || 0); localN += (yData.n || 0); }
        const localRate = localN > 0 ? (localOutliers / localN) : 0;
        let label = '品質優良';
        let color = '#38a169';
        if (localRate > 0.05) { label = '需要改善'; color = '#f59e0b'; }
        else if (localRate > 0.02) { label = '良好'; color = '#10b981'; }
        riskLevelEl.textContent = label;
        riskLevelEl.style.color = color;
        riskDetails.innerHTML = `• 異常點: ${localOutliers} / ${localN} (${(localRate*100).toFixed(1)}%)<br>• 測量手法: A–D 動態分析<br>• 建議: ${label === '需要改善' ? '檢視手法與接觸點一致性' : '維持現有測量標準'}`;
    }
    
    scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: `${getMeasurementText(selectedScatterX)} vs ${getMeasurementText(selectedScatterY)}`,
                data: dataPoints,
                backgroundColor: dataPoints.map(point => getProjectColor(point.project) + '60'),
                borderColor: dataPoints.map(point => getProjectColor(point.project)),
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1f2937',
                    bodyColor: '#4b5563',
                    borderColor: '#d1d5db',
                    borderWidth: 1,
                    callbacks: {
                        title: function(context) {
                            const point = dataPoints[context[0].dataIndex];
                            const desc = point.method ? getMethodDescription(point.method) : '';
                            return `${point.project} - 手法${point.method || '-'}${desc ? '（' + desc + '）' : ''}`;
                        },
                        label: function(context) {
                            const xText = getMeasurementText(selectedScatterX);
                            const yText = getMeasurementText(selectedScatterY);
                            return [
                                `${xText}: ${context.parsed.x.toFixed(2)}`,
                                `${yText}: ${context.parsed.y.toFixed(2)}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: `${getMeasurementText(selectedScatterX)}`,
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: { color: '#f3f4f6' },
                    min: 80,
                    max: 102,
                    ticks: {
                        stepSize: 2
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: `${getMeasurementText(selectedScatterY)}`,
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: { color: '#f3f4f6' },
                    min: 80,
                    max: 102,
                    ticks: {
                        stepSize: 2
                    }
                }
            }
        }
    });
}

function updateParetoChart() {
    console.log('Updating pareto chart...');
    
    const isDark = document.documentElement.classList.contains('dark');
    const axisTitleColor = isDark ? '#e5e7eb' : '#2d3748';
    
    if (paretoChart) {
        paretoChart.destroy();
        paretoChart = null;
    }
    
    const canvas = document.getElementById('paretoChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 從當前 phaseBreakdown 的異常診斷動態生成柏拉圖資料
    const diagnosisCountMap = new Map();
    let totalOutlierCount = 0;
    
    Object.values(phaseBreakdown).forEach(entry => {
        const diagnoses = entry.outliersDiagnosis || [];
        diagnoses.forEach(d => {
            const key = d.diagnosis || '其他品質因素';
            diagnosisCountMap.set(key, (diagnosisCountMap.get(key) || 0) + 1);
            totalOutlierCount += 1;
        });
    });
    
    // 若沒有任何異常診斷資料，提供預設的空資料以保持圖表渲染
    let paretoData;
    if (totalOutlierCount === 0 || diagnosisCountMap.size === 0) {
        paretoData = [
            { cause: '無異常（樣本內）', count: 0, percentage: 0 }
        ];
    } else {
        // 將 Map 轉為陣列，依 count 由高到低排序
        const sorted = Array.from(diagnosisCountMap.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([cause, count]) => ({
                cause,
                count,
                percentage: totalOutlierCount > 0 ? (count / totalOutlierCount) * 100 : 0
            }));
        paretoData = sorted;
    }
    
    // 計算累積百分比
    let cumulative = 0;
    const cumulativeData = paretoData.map(item => {
        cumulative += item.percentage;
        return Number(cumulative.toFixed(2));
    });
    
    paretoChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: paretoData.map(item => item.cause),
            datasets: [
                {
                    type: 'bar',
                    label: '品質貢獻度（次數）',
                    data: paretoData.map(item => item.count),
                backgroundColor: '#f59e0b80',
                borderColor: '#f59e0b',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    type: 'line',
                    label: '累積百分比',
                    data: cumulativeData,
                    borderColor: '#ef4444',
                    backgroundColor: '#ef444420',
                    borderWidth: 3,
                    pointBackgroundColor: '#ef4444',
                    pointBorderColor: '#ffffff',
                    pointRadius: 5,
                    yAxisID: 'y1',
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: axisTitleColor,
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            // 顯示單項累積百分比
                            const idx = context[0].dataIndex;
                            const cumulativePct = cumulativeData[idx];
                            const pct = paretoData[idx]?.percentage ?? 0;
                            return [`單項佔比: ${pct.toFixed(1)}%`, `累積: ${cumulativePct.toFixed(1)}%`];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '品質要因（依出現頻次排序）',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: {
                        maxRotation: 45,
                        font: { size: 10 },
                        color: axisTitleColor
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '次數',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: { color: axisTitleColor },
                    beginAtZero: true
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '累積百分比 (%)',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: { color: axisTitleColor },
                    min: 0,
                    max: 100,
                    grid: { drawOnChartArea: false }
                }
            }
        }
    });

    // 動態更新柏拉圖下方三張卡片
    const majorValue = document.getElementById('paretoMajorValue');
    const majorSubtitle = document.getElementById('paretoMajorSubtitle');
    const majorDetails = document.getElementById('paretoMajorDetails');
    const scopeValue = document.getElementById('paretoScopeValue');
    const scopeDetails = document.getElementById('paretoScopeDetails');
    const maintainValue = document.getElementById('paretoMaintainValue');
    const maintainDetails = document.getElementById('paretoMaintainDetails');

    const labels = paretoData.map(d => d.cause);
    const percentages = paretoData.map(d => d.percentage);
    if (majorValue && majorSubtitle && majorDetails) {
        majorValue.textContent = labels[0] ? labels[0] : '—';
        majorSubtitle.textContent = labels[0] ? `佔比 ${percentages[0].toFixed ? percentages[0].toFixed(1) : percentages[0]}%` : '—';
        majorDetails.innerHTML = `• Top 1: ${labels[0] || '—'}<br>• Top 2: ${labels[1] || '—'}<br>• Top 3: ${labels[2] || '—'}`;
    }

    if (scopeValue && scopeDetails) {
        const measurerCount = new Set(measurementData.map(r => r.量測者)).size;
        const instrumentCount = new Set(measurementData.map(r => r.儀器編號)).size;
        const methodSet = new Set(measurementData.map(r => r.量測手法).filter(Boolean));
        const methodCount = methodSet.size;
        const methodList = Array.from(methodSet).sort().join('/');
        // 以全域異常率
        let totalN = 0, totalOut = 0;
        Object.values(spcData).forEach(d => { totalN += (d.n || 0); totalOut += (d.outliers || 0); });
        const rate = totalN > 0 ? (totalOut / totalN) : 0;
        scopeValue.textContent = '全量測者/儀器';
        scopeDetails.innerHTML = `• 量測者: ${measurerCount} 位<br>• 儀器編號: ${instrumentCount} 台<br>• 測量手法: ${methodCount} 種 (${methodList})<br>• 測量項目: 量測值1/2/3<br>• 異常率: ${(rate*100).toFixed(1)}%`;
    }

    if (maintainValue && maintainDetails) {
        const top1Cause = labels[0] || '';
        const top1Action = getMaintainActionFromCause(top1Cause);
        maintainValue.textContent = '測量維持';
        maintainDetails.innerHTML = `1. ${top1Action}<br>2. 量測者培訓與一致性<br>3. 設備校準與維護`;
    }
}

// ==================== 工具函數 ====================
function getMaintainActionFromCause(cause) {
    if (!cause) return '手法標準化';
    // 依主要要因轉換為可執行的維持/改善項目
    if (cause.includes('接觸電阻過高')) {
        // 目前資料顯示手法B為主因，導向手法與接觸介面改善
        return '手法B標準化（夾持位置/壓力/接觸面清潔）';
    }
    if (cause.includes('手法') || cause.includes('測量手法')) {
        return '測量手法標準化（SOP 明確化與稽核）';
    }
    if (cause.includes('量測者') || cause.includes('人員')) {
        return '量測者訓練與交叉驗證';
    }
    if (cause.includes('設備') || cause.includes('儀器')) {
        return '設備校準與維護週期強化';
    }
    return `針對「${cause}」之標準化/訓練/校準`; // 通用回退
}
// 獲取可用量測者列表
function getAvailableMeasurers(project) {
    const measurers = new Set();
    measurementData.forEach(record => {
        if (record.儀器編號 === project) {
            measurers.add(record.量測者);
        }
    });
    return Array.from(measurers);
}

function generateMeasurementData(mean, stdDev, count, realData = null) {
    // 如果有實際數據，優先使用實際數據
    if (realData && realData.length > 0) {
        return realData.slice();
    }
    
    // 否則生成模擬數據
    const data = [];
    for (let i = 0; i < count; i++) {
        const u1 = Math.random();
        const u2 = Math.random();
        const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        const value = mean + stdDev * z0;
        data.push(Math.max(0, value));
    }
    return data;
}

function createHistogramBins(data, binCount) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const binWidth = (max - min) / binCount;
    
    // 決定小數顯示位數，避免標籤重複（例如 2.2-2.3 重複）
    let decimals = 0;
    if (binWidth < 1) decimals = 1;
    if (binWidth < 0.1) decimals = 2;
    if (binWidth < 0.01) decimals = 3;
    
    const bins = [];
    for (let i = 0; i < binCount; i++) {
        const start = min + i * binWidth;
        // 確保最後一個區間的結束值為 max，避免浮點誤差造成的缺口
        const end = i === binCount - 1 ? max : (min + (i + 1) * binWidth);
        bins.push({
            start,
            end,
            count: 0,
            label: `${start.toFixed(decimals)}-${end.toFixed(decimals)}`
        });
    }
    
    data.forEach(value => {
        const binIndex = Math.min(Math.floor((value - min) / binWidth), binCount - 1);
        bins[binIndex].count++;
    });
    
    return bins;
}

// 簡易偏態係數計算（Fisher-Pearson，樣本版）
function computeSkewness(values) {
    if (!values || values.length < 3) return 0;
    const n = values.length;
    const mean = values.reduce((s, v) => s + v, 0) / n;
    const d = values.map(v => v - mean);
    const m2 = d.reduce((s, v) => s + v * v, 0) / (n - 1);
    const m3 = d.reduce((s, v) => s + v * v * v, 0) / n;
    const s = Math.sqrt(m2);
    if (s === 0) return 0;
    return (Math.sqrt(n * (n - 1)) / (n - 2)) * (m3 / Math.pow(s, 3));
}

function getMeasurementColor(measurement) {
    switch(measurement) {
        case '量測值1': return '#e53e3e'; // 紅色 - 量測值1
        case '量測值2': return '#38a169'; // 綠色 - 量測值2
        case '量測值3': return '#3182ce'; // 藍色 - 量測值3
        case 'actionTime': return '#e53e3e';
        case 'phaseDiff': return '#38a169'; 
        case 'speed': return '#3182ce';
        case 'closeTime1': return '#d69e2e';
        case 'closeTime2': return '#805ad5';
        default: return '#667eea';
    }
}

function getProjectColor(project) {
    const colors = ['#e53e3e', '#38a169', '#3182ce', '#d69e2e', '#805ad5', '#ed8936', '#9f7aea'];
    const index = projects.indexOf(project);
    return colors[index % colors.length];
}

function getMeasurementText(measurement) {
    switch(measurement) {
        case '量測值1': return '量測值1';
        case '量測值2': return '量測值2';
        case '量測值3': return '量測值3';
        case 'actionTime': return '接觸電阻';
        case 'phaseDiff': return '三相相差時間'; 
        case 'speed': return '速度';
        case 'closeTime1': return '投入操作第一組';
        case 'closeTime2': return '投入操作第二組';
        default: return measurement;
    }
}

// 計算相關係數的輔助函數
function calculateCorrelation(dataPoints) {
    const n = dataPoints.length;
    const sumX = dataPoints.reduce((sum, point) => sum + point.x, 0);
    const sumY = dataPoints.reduce((sum, point) => sum + point.y, 0);
    const sumXY = dataPoints.reduce((sum, point) => sum + point.x * point.y, 0);
    const sumXX = dataPoints.reduce((sum, point) => sum + point.x * point.x, 0);
    const sumYY = dataPoints.reduce((sum, point) => sum + point.y * point.y, 0);
    
    const correlation = (n * sumXY - sumX * sumY) / 
        Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));
    
    return correlation;
}

// ==================== 初始化 ====================
function initializeControls() {
    // 儀器編號按鈕
    const projectButtons = document.getElementById('projectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        projects.forEach(project => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${project === selectedProject ? 'active' : ''}`;
            btn.textContent = project;
            btn.addEventListener('click', () => selectProject(project));
            projectButtons.appendChild(btn);
        });
    }
    
    
    // 量測者按鈕 - 根據選擇的儀器編號顯示可用的量測者
    const groupButtons = document.getElementById('groupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        
        // 獲取當前儀器編號的量測者列表
        const availableMeasurers = getAvailableMeasurers(selectedProject);
        
        availableMeasurers.forEach(measurer => {
                const btn = document.createElement('button');
            btn.className = `control-btn ${measurer === selectedMeasurer ? 'active' : ''}`;
            btn.textContent = measurer;
            btn.dataset.value = measurer;
            btn.addEventListener('click', () => selectMeasurer(measurer));
                groupButtons.appendChild(btn);
            });
        
        // 如果沒有選中的量測者，但有可用的量測者，選擇第一個
        if (!selectedMeasurer && availableMeasurers.length > 0) {
            selectedMeasurer = availableMeasurers[0];
        }
    }
    
    // 測量值按鈕 - 量測值1、量測值2、量測值3
    const measurementButtons = document.getElementById('measurementButtons');
    if (measurementButtons) {
        measurementButtons.innerHTML = '';
        const measurements = ['量測值1', '量測值2', '量測值3'];
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedMeasurement ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectMeasurement(measurement));
            measurementButtons.appendChild(btn);
        });
    }
}

// 直方圖控制面板初始化
function initializeHistogramControls() {
    // 儀器編號按鈕
    const projectButtons = document.getElementById('histogramProjectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        projects.forEach(project => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${project === selectedHistogramProject ? 'active' : ''}`;
            btn.textContent = project;
            btn.addEventListener('click', () => selectHistogramProject(project));
            projectButtons.appendChild(btn);
        });
    }
    
    // 量測者按鈕
    const groupButtons = document.getElementById('histogramGroupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        const availableMeasurers = getAvailableMeasurers(selectedHistogramProject);
        availableMeasurers.forEach(measurer => {
                const btn = document.createElement('button');
            btn.className = `control-btn ${measurer === selectedHistogramGroup ? 'active' : ''}`;
            btn.textContent = measurer;
            btn.dataset.value = measurer;
            btn.addEventListener('click', () => selectHistogramGroup(measurer));
                groupButtons.appendChild(btn);
            });
    }
    
    // 測量值按鈕
    const measurementButtons = document.getElementById('histogramMeasurementButtons');
    if (measurementButtons) {
        measurementButtons.innerHTML = '';
        const measurements = ['量測值1', '量測值2', '量測值3'];
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedHistogramMeasurement ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectHistogramMeasurement(measurement));
            measurementButtons.appendChild(btn);
        });
    }
}

// 散佈圖控制面板初始化
function initializeScatterControls() {
    // 儀器編號按鈕
    const projectButtons = document.getElementById('scatterProjectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        projects.forEach(project => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${project === selectedScatterProject ? 'active' : ''}`;
            btn.textContent = project;
            btn.addEventListener('click', () => selectScatterProject(project));
            projectButtons.appendChild(btn);
        });
    }
    
    // 量測者按鈕
    const groupButtons = document.getElementById('scatterGroupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        const availableMeasurers = getAvailableMeasurers(selectedScatterProject);
        availableMeasurers.forEach(measurer => {
                const btn = document.createElement('button');
            btn.className = `control-btn ${measurer === selectedScatterGroup ? 'active' : ''}`;
            btn.textContent = measurer;
            btn.dataset.value = measurer;
            btn.addEventListener('click', () => selectScatterGroup(measurer));
                groupButtons.appendChild(btn);
            });
    }
    
    // X軸測量值按鈕
    const xMeasurementButtons = document.getElementById('scatterXMeasurementButtons');
    if (xMeasurementButtons) {
        xMeasurementButtons.innerHTML = '';
        const measurements = ['量測值1', '量測值2', '量測值3'];
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedScatterX ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectScatterX(measurement));
            xMeasurementButtons.appendChild(btn);
        });
    }
    
    // Y軸測量值按鈕
    const yMeasurementButtons = document.getElementById('scatterYMeasurementButtons');
    if (yMeasurementButtons) {
        yMeasurementButtons.innerHTML = '';
        const measurements = ['量測值1', '量測值2', '量測值3'];
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedScatterY ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectScatterY(measurement));
            yMeasurementButtons.appendChild(btn);
        });
    }
}

function initializeOverviewTable() {
    const tbody = document.querySelector('#overviewTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.keys(spcData).forEach(groupKey => {
        const data = spcData[groupKey];
        const [project, measurer, operation, measurement] = groupKey.split('-');
        
        const row = tbody.insertRow();
        
        // 狀態根據「平均值」與標準/規格範圍決定
        let status = 'excellent';
        let statusText = '優良';
        const limits = specLimits[operation] || {};
        const stdLower = limits['標準值下限'];
        const stdUpper = limits['標準值上限'];
        const lsl = limits['下限值'];
        const usl = limits['上限值'];
        const mean = data.mean;

        if (typeof mean === 'number') {
            if ((typeof lsl === 'number' && mean < lsl) || (typeof usl === 'number' && mean > usl)) {
            status = 'critical';
            statusText = '異常';
            } else if ((typeof stdLower === 'number' && mean < stdLower) || (typeof stdUpper === 'number' && mean > stdUpper)) {
            status = 'warning';
            statusText = '可改善';
            } else {
                status = 'excellent';
                statusText = '優良';
            }
        }
        
        row.innerHTML = `
            <td style="font-weight: 600;">${project}</td>
            <td>${operation}${measurer ? '-' + measurer : ''}-${measurement}</td>
            <td>${data.n}</td>
            <td>${data.mean.toFixed(2)}</td>
            <td>${data.stdDev.toFixed(2)}</td>
            <td style="color: #dc2626;">${data.lsl ? `${data.lsl}~` : '≤'}${data.usl}</td>
            <td style="color: #f59e0b;">${specLimits[operation]?.["標準值下限"] ?? ''}~${specLimits[operation]?.["標準值上限"] ?? ''}</td>
            <td class="${data.outliers > 0 ? 'status-critical' : 'status-excellent'}">${data.outliers}</td>
            <td class="status-${status}">${statusText}</td>
        `;
    });
}

function renderOutlierSummary() {
    const tbody = document.getElementById('outlierSummaryList');
    const countEl = document.getElementById('outlierSummaryCount');
    if (!tbody || !countEl) return;
    
    tbody.innerHTML = '';
    let total = 0;
    
    // 彙總所有 phaseBreakdown 的異常點
    Object.keys(phaseBreakdown).forEach(key => {
        const data = phaseBreakdown[key];
        const [project, measurer] = key.split('-');
        const measurement = data.measurement;
        const usl = data.usl;
        const lsl = data.lsl;
        const mean = data.mean;
        const std = data.stdDev;
        const ucl = data.ucl;
        const lcl = data.lcl;
        const diagnoses = data.outliersDiagnosis || [];
        
        (data.outliersValues || []).forEach((val, idx) => {
            const diag = diagnoses[idx]?.diagnosis || '異常值';
            let basis = [];
            if (typeof usl === 'number' && val > usl) basis.push(`> USL(${usl})`);
            if (typeof lsl === 'number' && val < lsl) basis.push(`< LSL(${lsl})`);
            if (typeof ucl === 'number' && val > ucl) basis.push(`> UCL(${ucl.toFixed(2)})`);
            if (typeof lcl === 'number' && val < lcl) basis.push(`< LCL(${lcl.toFixed(2)})`);
            if (basis.length === 0 && typeof mean === 'number' && typeof std === 'number') {
                basis.push(`|x-μ|>3σ (μ=${mean.toFixed(2)}, σ=${std.toFixed(2)})`);
            }
            
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${project}</td>
                <td>${measurer}</td>
                <td>${measurement}</td>
                <td>${Number(val).toFixed(2)}</td>
                <td>${diag}</td>
                <td>${basis.join('、')}</td>
            `;
            total++;
        });
    });
    
    countEl.textContent = total;
}

function renderOutlierCauseAnalysis() {
    const container = document.getElementById('outlierCauseCard');
    if (!container) return;

    const summaryEl = document.getElementById('outlierCauseSummary');
    const listsEl = document.getElementById('outlierCauseLists');
    if (!summaryEl || !listsEl) return;

    const byInstrument = new Map();
    const byMeasurer = new Map();
    const byMethod = new Map();
    const byMeasurement = new Map();

    let totalOutliers = 0;

    Object.keys(phaseBreakdown).forEach(key => {
        const d = phaseBreakdown[key];
        const project = d.project;
        const measurer = d.group;
        const measurement = d.measurement;
        const methodOrder = d.methodOrder || [];

        const diagnoses = d.outliersDiagnosis || [];
        diagnoses.forEach(o => {
            totalOutliers++;
            const idx = typeof o.index === 'number' ? o.index : null;
            const method = (idx !== null && methodOrder[idx]) ? methodOrder[idx] : (methodOrder[0] || 'A');

            byInstrument.set(project, (byInstrument.get(project) || 0) + 1);
            byMeasurer.set(measurer, (byMeasurer.get(measurer) || 0) + 1);
            byMethod.set(method, (byMethod.get(method) || 0) + 1);
            byMeasurement.set(measurement, (byMeasurement.get(measurement) || 0) + 1);
        });
    });

    const sortEntries = (map, type) => {
        const arr = Array.from(map.entries());
        const methodOrder = { A: 1, B: 2, C: 3, D: 4 };
        const measKey = (k) => k;
        const instrKey = (k) => k;
        const measValKey = (k) => {
            // 量測值1/2/3 -> 1/2/3 作為數值排序
            const n = k && k.startsWith('量測值') ? Number(k.replace('量測值','')) : 999;
            return isNaN(n) ? 999 : n;
        };
        return arr.sort((a,b)=>{
            if (b[1] !== a[1]) return b[1] - a[1];
            // tie-breakers
            if (type === 'method') {
                const aa = methodOrder[a[0]] ?? 99;
                const bb = methodOrder[b[0]] ?? 99;
                return aa - bb;
            }
            if (type === 'measurement') {
                return measValKey(a[0]) - measValKey(b[0]);
            }
            if (type === 'instrument') {
                return instrKey(a[0]) < instrKey(b[0]) ? -1 : 1;
            }
            if (type === 'measurer') {
                return measKey(a[0]) < measKey(b[0]) ? -1 : 1;
            }
            return 0;
        });
    };

    const topInstrument = sortEntries(byInstrument, 'instrument')[0];
    const topMeasurer = sortEntries(byMeasurer, 'measurer')[0];
    const topMethod = sortEntries(byMethod, 'method')[0];
    const topMeasurement = sortEntries(byMeasurement, 'measurement')[0];

    // 依發生數量由高到低排列四個類別
    const summaryItems = [
        topInstrument ? { label: '儀器編號', name: topInstrument[0], count: topInstrument[1] } : null,
        topMeasurer ? { label: '量測者', name: topMeasurer[0], count: topMeasurer[1] } : null,
        topMethod ? { label: '測量手法', name: topMethod[0], count: topMethod[1] } : null,
        topMeasurement ? { label: '測量值', name: topMeasurement[0], count: topMeasurement[1] } : null
    ].filter(Boolean).sort((a,b)=>b.count - a.count);

    const summaryText = summaryItems.map(it => `${it.label} <strong>${it.name}</strong> (${it.count} 個)`).join('、 ');
    summaryEl.innerHTML = `異常點總數：<strong>${totalOutliers}</strong> 個。主要集中於： ${summaryText}。`;

    const renderList = (title, map, type) => {
        const list = sortEntries(map, type)
            .slice(0, 10)
            .map(([k,v]) => `<li>${k}: <strong>${v}</strong> 個</li>`)
            .join('');
        return `
            <div style="margin-top: 12px;">
                <strong>${title}</strong>
                <ul style="margin: 6px 0 0 18px;">${list || '<li>—</li>'}</ul>
            </div>
        `;
    };

    // 類別依主要原因高到低排序（與摘要一致）
    const categories = [
        { title: '按儀器編號彙總', map: byInstrument, type: 'instrument', top: topInstrument?.[1] || 0 },
        { title: '按量測者彙總', map: byMeasurer, type: 'measurer', top: topMeasurer?.[1] || 0 },
        { title: '按測量手法彙總', map: byMethod, type: 'method', top: topMethod?.[1] || 0 },
        { title: '按測量值彙總', map: byMeasurement, type: 'measurement', top: topMeasurement?.[1] || 0 }
    ].sort((a,b)=> b.top - a.top);

    listsEl.innerHTML = categories
        .map(c => renderList(c.title, c.map, c.type))
        .join('');
}

function initializeStatisticsTable() {
    const tbody = document.querySelector('#statisticsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.keys(phaseBreakdown).forEach(phaseKey => {
        const data = phaseBreakdown[phaseKey];
        const [project, measurer, operation, measurement] = phaseKey.split('-');
        
        const row = tbody.insertRow();
        
        let statusClass = 'excellent';
        let status = '正常';
        if (data.outliers > 0) {
            statusClass = 'critical';
            status = '異常';
        }
        
        row.innerHTML = `
            <td>${project}</td>
            <td>${operation}${measurer ? '-' + measurer : ''}-${measurement}</td>
            <td>${data.n}</td>
            <td>${data.mean.toFixed(2)}</td>
            <td>${data.stdDev.toFixed(2)}</td>
            <td>${data.min ? data.min.toFixed(2) : 'N/A'}</td>
            <td>${data.max ? data.max.toFixed(2) : 'N/A'}</td>
            <td class="${data.outliers > 0 ? 'status-critical' : 'status-excellent'}">${data.outliers}</td>
            <td class="status-${statusClass}">${status}</td>
        `;
    });
}


// ==================== 統計數據計算 ====================
function updateHeaderStats() {
    const measurementData = circuitBreakerData["量測數據"];
    
    // 計算總測量數（所有測量值的總數）
    let totalMeasurements = 0;
    let totalOutliers = 0;
    const uniqueProjects = new Set();
    const uniqueInstruments = new Set();
    
    measurementData.forEach(record => {
        uniqueInstruments.add(record.儀器編號);
        
        // 計算每個記錄的測量值數量
        if (record.量測值1 !== null && record.量測值1 !== undefined) {
            totalMeasurements++;
        }
        if (record.量測值2 !== null && record.量測值2 !== undefined) {
            totalMeasurements++;
        }
        if (record.量測值3 !== null && record.量測值3 !== undefined) {
            totalMeasurements++;
        }
    });
    
    // 計算儀器編號數量
    const projectCount = uniqueInstruments.size;
    
    // 計算檔位數（量測者的數量）
    const measurerCount = new Set(measurementData.map(record => record.量測者)).size;
    
    // 計算異常點總數
    Object.values(spcData).forEach(data => {
        totalOutliers += data.outliers || 0;
    });
    
    // 更新HTML中的統計數據
    const totalMeasurementsEl = document.querySelector('.header-stat-value');
    const measurerCountEl = document.querySelectorAll('.header-stat-value')[1];
    const instrumentCountEl = document.querySelectorAll('.header-stat-value')[2];
    const methodCountEl = document.querySelectorAll('.header-stat-value')[3];
    const outlierCountEl = document.querySelectorAll('.header-stat-value')[4];
    
    if (totalMeasurementsEl) totalMeasurementsEl.textContent = totalMeasurements;
    if (measurerCountEl) measurerCountEl.textContent = measurerCount;
    if (instrumentCountEl) instrumentCountEl.textContent = projectCount;
    if (methodCountEl) methodCountEl.textContent = 4; // A、B、C、D 四種手法
    if (outlierCountEl) outlierCountEl.textContent = totalOutliers;
    
    // 更新詳細統計資訊 + 整體品質狀況動態等級
    const statsDetails = document.querySelector('.stats-details');
    const systemAlertBox = document.getElementById('systemAlertBox');
    const systemAlertTitle = document.getElementById('systemAlertTitle');
    const systemAlertText = document.getElementById('systemAlertText');
    const overallQualityCard = document.getElementById('overallQualityCard');
    const overallQualityValue = document.getElementById('overallQualityValue');
    const overallOutlierText = document.getElementById('overallOutlierText');
    if (statsDetails) {
        const outlierPercentage = totalMeasurements > 0 ? ((totalOutliers / totalMeasurements) * 100).toFixed(1) : 0;
        statsDetails.innerHTML = `
            • 總測量數: ${totalMeasurements} 筆 (${projectCount}個儀器編號完整數據)<br>
            • 異常點: ${totalOutliers} 個 (${outlierPercentage}%)<br>
            • 測量者數：${measurerCount} 位<br>
            • 儀器數：${projectCount} 台<br>
            • 量測手法：4 種 (A、B、C、D)<br>
            • 測量項目：量測值1/量測值2/量測值3<br>
            • 品質主要集中在「測量手法標準化」與「量測者技能一致」
        `;
    }

    // 測量項目統計比較（整體平均與異常率）
    const m1El = document.getElementById('meas1Summary');
    const m2El = document.getElementById('meas2Summary');
    const m3El = document.getElementById('meas3Summary');
    const meas1Status = document.getElementById('meas1Status');
    const meas2Status = document.getElementById('meas2Status');
    const meas3Status = document.getElementById('meas3Status');
    const meas1Details = document.getElementById('meas1Details');
    const meas2Details = document.getElementById('meas2Details');
    const meas3Details = document.getElementById('meas3Details');
    if (m1El || m2El || m3El) {
        const keys = Object.keys(phaseBreakdown);
        const agg = {
            '量測值1': { sum: 0, n: 0, outliers: 0 },
            '量測值2': { sum: 0, n: 0, outliers: 0 },
            '量測值3': { sum: 0, n: 0, outliers: 0 }
        };
        keys.forEach(k => {
            const d = phaseBreakdown[k];
            if (!d || !d.measurement) return;
            if (!agg[d.measurement]) return;
            // 使用群組平均與樣本數加權
            if (typeof d.mean === 'number' && typeof d.n === 'number') {
                agg[d.measurement].sum += d.mean * d.n;
                agg[d.measurement].n += d.n;
            }
            agg[d.measurement].outliers += (d.outliers || 0);
        });
        const render = (el, key) => {
            if (!el) return;
            const a = agg[key];
            const mean = a.n > 0 ? (a.sum / a.n) : NaN;
            const rate = a.n > 0 ? (a.outliers / a.n) : 0;
            el.innerHTML = `
                <strong style="color: #f59e0b;">${key} (整體):</strong><br>
                平均值: ${isFinite(mean) ? mean.toFixed(2) : '—'} μΩ<br>
                標準值: 84.5 ~ 87.0 μΩ<br>
                規格範圍: 78.7 ~ 96.2 μΩ<br>
                異常率: ${(rate*100).toFixed(1)}%
            `;
        };
        render(m1El, '量測值1');
        render(m2El, '量測值2');
        render(m3El, '量測值3');

        // 同步底部兩張卡片（量測值1/2 分析）
        const syncMeasCard = (statusEl, detailsEl, key) => {
            if (!statusEl || !detailsEl) return;
            const a = agg[key];
            const mean = a.n > 0 ? (a.sum / a.n) : NaN;
            const rate = a.n > 0 ? (a.outliers / a.n) : 0;
            let label = '品質優良';
            let color = '#38a169';
            if (rate > 0.05) { label = '需要改善'; color = '#f59e0b'; }
            else if (rate > 0.02) { label = '良好'; color = '#10b981'; }
            statusEl.textContent = label;
            statusEl.style.color = color;
            detailsEl.innerHTML = `
                • 平均值: ${isFinite(mean) ? mean.toFixed(2) : '—'} μΩ<br>
                • 標準差: — μΩ<br>
                • 異常率: ${(rate*100).toFixed(1)}%<br>
                • 狀態: ${label}
            `;
        };
        syncMeasCard(meas1Status, meas1Details, '量測值1');
        syncMeasCard(meas2Status, meas2Details, '量測值2');
        syncMeasCard(meas3Status, meas3Details, '量測值3');
    }

    // 手法與人員一致性（以群組標準差與異常率綜合評估）
    const methodConsistencyEl = document.getElementById('methodConsistencySummary');
    if (methodConsistencyEl) {
        const entries = Object.values(phaseBreakdown);
        let stdSum = 0;
        let stdCount = 0;
        let groupsNoOutlier = 0;
        let groupsTotal = 0;
        const measurerSet = new Set();
        entries.forEach(d => {
            if (!d) return;
            groupsTotal++;
            if (typeof d.stdDev === 'number' && isFinite(d.stdDev)) {
                stdSum += d.stdDev;
                stdCount++;
            }
            if ((d.outliers || 0) === 0) groupsNoOutlier++;
            if (d.group) measurerSet.add(d.group);
        });
        const avgStd = stdCount > 0 ? (stdSum / stdCount) : NaN;
        const noOutlierRate = groupsTotal > 0 ? (groupsNoOutlier / groupsTotal) : 0;
        let consistencyLabel = '優良';
        if (isFinite(avgStd)) {
            if (avgStd > 2.0) consistencyLabel = '需要改善';
            else if (avgStd > 1.0) consistencyLabel = '良好';
        }
        methodConsistencyEl.innerHTML = `
            <strong style="color: #f59e0b;">手法與人員一致性:</strong><br>
            手法(A–D): 平均標準差 ${isFinite(avgStd) ? avgStd.toFixed(2) : '—'} μΩ（${consistencyLabel}）<br>
            量測者: ${measurerSet.size} 位，無異常群組比例 ${(noOutlierRate*100).toFixed(1)}%<br>
            逸出/異常: 依 3σ 與 LSL/USL 即時統計<br>
            整體評估: ${consistencyLabel}
        `;

        // 底部卡片同步資訊
        const methodConsistencyStatus = document.getElementById('methodConsistencyStatus');
        const methodConsistencyDetails = document.getElementById('methodConsistencyDetails');
        if (methodConsistencyStatus && methodConsistencyDetails) {
            methodConsistencyStatus.textContent = consistencyLabel;
            methodConsistencyStatus.style.color = (consistencyLabel === '需要改善') ? '#f59e0b' : '#38a169';
            methodConsistencyDetails.innerHTML = `
                • 平均標準差: ${isFinite(avgStd) ? avgStd.toFixed(2) : '—'} μΩ<br>
                • 無異常群組比例: ${(noOutlierRate*100).toFixed(1)}%<br>
                • 建議: ${consistencyLabel === '需要改善' ? '檢視接觸點與手法一致性' : '維持現有標準'}
            `;
        }
    }

    // 整體品質等級規則
    const outlierRate = totalMeasurements > 0 ? (totalOutliers / totalMeasurements) : 0;
    let level = 'excellent';
    let label = '品質優良';
    let boxBg = '#38a169';
    let boxBorder = '#2f855a';
    if (outlierRate > 0.05) {
        level = 'warning';
        label = '需要改善';
        boxBg = '#f59e0b';
        boxBorder = '#b45309';
    } else if (outlierRate > 0.02) {
        level = 'good';
        label = '良好';
        boxBg = '#10b981';
        boxBorder = '#059669';
    }

    // 更新系統警示條與卡片狀態
    if (systemAlertBox && systemAlertTitle && systemAlertText) {
        systemAlertBox.style.background = boxBg;
        systemAlertBox.style.borderLeft = `4px solid ${boxBorder}`;
        systemAlertTitle.textContent = `${label} - 接觸電阻品質狀況`;
        systemAlertText.textContent = `目前異常率約 ${(outlierRate * 100).toFixed(1)}%，異常點 ${totalOutliers} / 樣本 ${totalMeasurements}。以 LSL/USL 與 3σ 進行判定，請持續監控主要要因。`;
    }
    if (overallQualityCard && overallQualityValue && overallOutlierText) {
        overallQualityCard.classList.remove('excellent', 'warning', 'critical');
        if (level === 'warning') overallQualityCard.classList.add('warning');
        else if (level === 'good') overallQualityCard.classList.add('excellent');
        else overallQualityCard.classList.add('excellent');
        overallQualityValue.textContent = label;
        overallQualityValue.style.color = (level === 'warning') ? '#f59e0b' : (level === 'good') ? '#10b981' : '#38a169';
        overallOutlierText.textContent = `${totalOutliers} 個 (${(outlierRate*100).toFixed(1)}%)`;
    }
}

// ==================== 主初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact Resistance Analysis System Initializing...');
    
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }
    
    Chart.defaults.font.family = "'PingFang TC', 'Microsoft JhengHei', sans-serif";
    Chart.defaults.color = '#4a5568';
    
    // 先初始化控制面板，再初始化表格
    initializeControls();
    initializeHistogramControls();
    initializeScatterControls();
    initializeOverviewTable();
    renderOutlierSummary();
    initializeStatisticsTable();
    
    // 初始化圖表
    setTimeout(() => {
        console.log('Initializing charts...');
        console.log('PhaseBreakdown keys:', Object.keys(phaseBreakdown));
        updateControlChart();
        updateHistogram();
        updateScatterPlot();
        updateParetoChart();
        renderOutlierCauseAnalysis();
        
        // 在SPC數據生成完成後更新統計數據
        updateHeaderStats();
        renderOutlierSummary();
    }, 1000);

    // 回到頂端按鈕邏輯
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        const toggleVisibility = () => {
            const threshold = 300; // 滾動超過 300px 才顯示
            if (window.scrollY > threshold) {
                backToTopBtn.classList.add('back-to-top--visible');
            } else {
                backToTopBtn.classList.remove('back-to-top--visible');
            }
        };

        // 初始與滾動時檢查
        toggleVisibility();
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        // 點擊平滑回頂部
        backToTopBtn.addEventListener('click', () => {
            // 先將焦點移到 body 以利鍵盤/螢幕閱讀器
            document.body.setAttribute('tabindex', '-1');
            document.body.focus({ preventScroll: true });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // 鍵盤支援：Enter/Space 觸發
        backToTopBtn.addEventListener('keydown', (e) => {
            const isActivateKey = e.key === 'Enter' || e.key === ' ';
            if (isActivateKey) {
                e.preventDefault();
                backToTopBtn.click();
            }
        });
    }

    // 深色模式切換與持久化
    const themeToggleBtn = document.getElementById('themeToggle');
    const rootHtml = document.documentElement;

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (mode) => {
        if (mode === 'dark') {
            rootHtml.classList.add('dark');
            if (themeToggleBtn) {
                themeToggleBtn.setAttribute('aria-pressed', 'true');
                themeToggleBtn.textContent = '☀️ 淺色模式';
            }
        } else {
            rootHtml.classList.remove('dark');
            if (themeToggleBtn) {
                themeToggleBtn.setAttribute('aria-pressed', 'false');
                themeToggleBtn.textContent = '🌙 深色模式';
            }
        }
    };

    // 初始主題：以 localStorage 優先，否則預設為淺色
    applyTheme(savedTheme ? savedTheme : 'light');

    // 停用自動跟隨系統偏好，維持使用者選擇或預設淺色

    // 切換點擊
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = rootHtml.classList.toggle('dark');
            const mode = isDark ? 'dark' : 'light';
            localStorage.setItem('theme', mode);
            themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            themeToggleBtn.textContent = isDark ? '☀️ 淺色模式' : '🌙 深色模式';
            // 重新繪製受影響的圖表，使座標軸標題配色更新
            updateParetoChart();
            renderOutlierCauseAnalysis();
        });
    }
});