var Macros = require('comment-macros');
var pkg = require('./package.json');

module.exports = debug;

function debug(configs) {
  var defaultConfigs = {};
  defaultConfigs.namespace = pkg.name;
  defaultConfigs.subnamespaceMarker = '<>';
  defaultConfigs.varsMarker = '{}';

  this.configs = configs || defaultConfigs;
}

debug.prototype.process = process;

function splitMarker(str) {
  var markers = str.split('');
  return {
    start: markers[0],
    end: markers[1]
  };
}

function process(js) {
  var self = this;
  var macro = new Macros;

  macro.use(debuger);

  function debuger(label) {
    var namespace;
    var prefix = self.configs.namespace;
    var markers = {};

    markers.subnamespace = splitMarker(self.configs.subnamespaceMarker);
    markers.vars = splitMarker(self.configs.varsMarker);

    var hasSubnamespace = label.indexOf(markers.subnamespace.start) > -1 && label.indexOf(markers.subnamespace.end) > -1;

    if (hasSubnamespace) {
      namespace = label.substr(
        label.indexOf(markers.subnamespace.start) + 1,
        label.indexOf(markers.subnamespace.end) - (label.indexOf(markers.subnamespace.start) + 1)
      )
    }

    if (namespace) {
      prefix = prefix + ':' + namespace;
      label = label.replace(
        markers.subnamespace.start + namespace + markers.subnamespace.end,
        ''
      );
    }

    if (label.indexOf(markers.vars.start) === -1 && label.indexOf(markers.vars.end) === -1)
      return 'debug("' + prefix + '")("' + label + '")';

    var vars = label.substr(
      label.indexOf(markers.vars.start) + 1, 
      label.indexOf(markers.vars.end) - (label.indexOf(markers.vars.start) + 1)
    );

    label = label.replace(markers.vars.start + vars + markers.vars.end, '%s');

    return 'debug("' + prefix + '")("' + label + '", ' + vars + ')';
  }

  return macro.process(js);
}
