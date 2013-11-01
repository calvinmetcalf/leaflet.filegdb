leaflet.FileGDB
=================

requires [filegdb.js](https://github.com/calvinmetcalf/fileGDB.js) plus if you want it
to be done in a worker, you'll need [catiline](https://github.com/calvinmetcalf/catiline) (in a worker filegdb needs to be accessible by the path `fgdb.js` relative to the document).

usage:

```javascript
new L.FileGDB(url[,options]);

L.fileGDB(url[,options]);
```

Options are passed to L.Geojson as is. First argument is the url of a zipped file GeoDatabase.

All feature classes in the geodatabase are added to the same layer, if you need more fine grained control
you should probably use [filegdb.js](https://github.com/calvinmetcalf/fileGDB.js) directly.

The loading events work with [leaflet.spin](https://github.com/makinacorpus/Leaflet.Spin)

If you don't know what a File GeoDatabase is count yourself lucky and move along.
