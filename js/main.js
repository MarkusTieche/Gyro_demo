function init()
{
	if (window.DeviceOrientationEvent) {
		
		window.addEventListener("deviceorientation", function(event) 
		{
			console.log(event)
            
//			var xValue = Math.round(event.gamma);
//			var yValue = Math.round(event.beta);
//			var Rotation = Math.round(event.alpha)
			
			document.getElementById("y").style.webkitTransform = "scaleY("+(Math.round(event.beta))+")";  
			document.getElementById("x").style.webkitTransform = "scaleX("+(Math.round(event.gamma))+")";
			document.getElementById("angle").style.webkitTransform = "rotateZ("+(Math.round(event.alpha))+"deg)";  
		}, true);
		
		
		
	} else {
  	console.log("Sorry, your browser doesn't support Device Orientation");
	} 
}