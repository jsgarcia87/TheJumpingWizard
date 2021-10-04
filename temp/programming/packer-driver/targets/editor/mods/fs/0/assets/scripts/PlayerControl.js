System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, systemEvent, SystemEvent, KeyCode, clamp, UITransform, Rect, Collider, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PlayerControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      KeyCode = _cc.KeyCode;
      clamp = _cc.clamp;
      UITransform = _cc.UITransform;
      Rect = _cc.Rect;
      Collider = _cc.Collider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "716b5jwLIdMzrc292IMVD8j", "PlayerControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerControl", PlayerControl = (_dec = ccclass('PlayerControl'), _dec(_class = (_class2 = (_temp = class PlayerControl extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "vMov", 0.0);

          _defineProperty(this, "hMov", 0.0);

          _initializerDefineProperty(this, "speed", _descriptor, this);
        }

        start() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          director.getScene().addChild(player);
          var collider = this.getComponent(Collider);
          collider.on("onTriggerEnter", this.onTriggerEnter, this);
        }

        onTriggerEnter(event) {
          if (event.otherCollider.getComponent(pla) != null) {
            this.node.destroy();
          }
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.ARROW_UP:
              this.vMov = this.speed;
              break;

            case KeyCode.ARROW_RIGHT:
              this.hMov = this.speed;
              break;

            case KeyCode.ARROW_LEFT:
              this.hMov = -this.speed;
              break;
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.ARROW_UP:
              if (this.vMov > 0) {
                this.vMov = 0;
              }

              break;

            case KeyCode.ARROW_RIGHT:
              if (this.hMov > 0) {
                this.hMov = 0;
              }

              break;

            case KeyCode.ARROW_LEFT:
              if (this.hMov < 0) {
                this.hMov = 0;
              }

              break;
          }
        }

        update(dt) {
          this.move(dt);
          this.clampPosition();
        }

        move(dt) {
          var pos = this.node.position;
          pos.set(pos.x + this.hMov * dt, pos.y + this.vMov * dt);
          this.node.position = pos;
        }

        getScreenRect() {
          var sprite = this.getComponent(UITransform);
          var canvas = this.node.parent.getComponent(UITransform);
          return new Rect(-canvas.width / 2.0 + sprite.width / 2.0, -canvas.height / 2.0 + sprite.height / 2.0, canvas.width - sprite.width, canvas.height - sprite.height);
        }

        clampPosition() {
          var screenRect = this.getScreenRect();
          var x = clamp(this.node.position.x, screenRect.xMin, screenRect.xMax);
          var y = clamp(this.node.position.y, screenRect.yMin, screenRect.yMax);
          this.node.position.set(x, y);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 250.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerControl.js.map