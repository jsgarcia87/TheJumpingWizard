System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, v2, _dec, _class, _crd, ccclass, property, MainGameControl;

  function getPhysicsManager() {
    throw new Error('Function not implemented.');
  }

  _export("getPhysicsManager", getPhysicsManager);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbd4ajTkddNBbr9GzNzblO2", "mainGameControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MainGameControl
       * DateTime = Sat Oct 02 2021 20:24:48 GMT+0200 (hora de verano de Europa central)
       * Author = jsgarcia
       * FileBasename = mainGameControl.ts
       * FileBasenameNoExtension = mainGameControl
       * URL = db://assets/scripts/mainGameControl.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("MainGameControl", MainGameControl = (_dec = ccclass('MainGameControl'), _dec(_class = class MainGameControl extends Component {
        start() {}

        onLoad() {
          let physics_manager = director.getPhysicsManager();
          physics_manager.enable = true;
          physics_manager.gravity = v2(0, -2000);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=mainGameControl.js.map