$(function () {
        var gaugeData = [90, 90, 80, 85, 80];
        var colors = ['#F8B430', '#F8B430', '#F8B430', '#F8B430', '#F8B430'];
        
        function drawGaugeChart(canvasId, value, color) {
            var canvas = document.getElementById(canvasId);
            var ctx = canvas.getContext('2d');
            
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radius = 30;
            var lineWidth = 10;
            
            // 게이지 배경 원
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = '#f0f0f0';
            ctx.stroke();
            
            // 게이지 그리기
            var startAngle = -0.5 * Math.PI;
            var endAngle = startAngle + (2 * Math.PI * (value / 100));
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
        
        // 각 canvas에 게이지 차트 그리기
        drawGaugeChart('html', gaugeData[0], colors[0]);
        drawGaugeChart('css', gaugeData[1], colors[1]);
        drawGaugeChart('js', gaugeData[2], colors[2]);
        drawGaugeChart('ps', gaugeData[3], colors[3]);
        drawGaugeChart('ai', gaugeData[4], colors[4]);
})

