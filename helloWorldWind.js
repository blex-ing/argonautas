var wwd = new WorldWind.WorldWindow("canvasOne");
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

var wwd1 = new WorldWind.WorldWindow("canvasTwo");
wwd1.addLayer(new WorldWind.BMNGOneImageLayer());
wwd1.addLayer(new WorldWind.BMNGLandsatLayer());
wwd1.addLayer(new WorldWind.CompassLayer());
wwd1.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd1));
wwd1.addLayer(new WorldWind.ViewControlsLayer(wwd2));