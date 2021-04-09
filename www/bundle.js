(function () {
  'use strict';

  var Header = function (_a) {
      var title = _a.title;
      return (React.createElement("header", null, title));
  };
  var Sidebar = function (_a) {
      var songs = _a.songs;
      return (React.createElement("aside", null, songs.map(function (song) { return (React.createElement("a", { href: song.id }, song.title)); })));
  };
  function App() {
      return (React.createElement("div", { className: "App" },
          React.createElement(Header, { title: "Hello World" }),
          React.createElement(Sidebar, { songs: [] })));
  }
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
  var piano = new Wad({
      source: 'square',
      pitch: 'C4',
      env: {
          attack: 0.01,
          decay: 0.005,
          sustain: 0.2,
          release: 0.3
      },
      filter: {
          type: 'lowpass',
          frequency: 1200,
          q: 8.5,
          env: {
              attack: 0.2,
              frequency: 600
          }
      }
  });
  piano.play();

}());
