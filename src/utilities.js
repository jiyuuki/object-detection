export const drawRect = (detections, ctx) => {
    detections.forEach(predection => {
        // Get predection results
        const [x,y,width,height] = predection['bbox'];
        const text = predection['class'];
        
        // Set styling
        const color = '#' + Math.floor(Math.random()*16777215);
        ctx.strokeSylt = color;
        ctx.fillStyle = color;

        // Draw rectangle and text
        ctx.beginPath();
        ctx.fillText(text,x,y);
        ctx.rect(x,y,width,height);
        ctx.stroke();
    });
}