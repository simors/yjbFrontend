/**
 * Created by wanpeng on 2017/11/24.
 */
"use strict";

var AV = require('leancloud-storage');

/**
 * Call this method first to set up your authentication tokens for yiijiabao.
 * You can get your app keys from the simors .
 * @param {String} appId
 * @param {String} appKey
 */
exports.init = function (appId, appKey) {
  if (!appId) throw new TypeError('appId must be a string');
  if (!appKey) throw new TypeError('appKey must be a string');
  AV.init(appId, appKey);
  return true;
};

/**
 * get user information
 * @param {String} userId
 * @param {Function} callback 回调函数
 * Callback:
 * - err, 调用失败时得到的异常
 * - result, 调用正常时得到的对象
 * Result:
 * //结果示例
 * {
 *  "id": "59db8b6d128fe1529c882cc6",
 *  "status": 101,
 *  "emailVerified": false,
 *  "mobilePhoneNumber": "17136414665",
 *  "mobilePhoneVerified": true,
 *  "authData": {
 *    "weixin": {
 *      "openid": "oA98d0lRecC0jsKDB2v0XesM2vpw",
 *      "access_token": "4_qeeqmHxZc7E1h__rKFqa089xmB9oh8EbwNiWIHVqE8yLeoI2O2Hd47gkwHYgtgVuiaM9wVVurhpQBM7w0zjA6Q",
 *      "expires_at": "165042835200000"
 *    }
 *  },
 *  "username": "17136414665",
 *  "nickname": "绿蚁001",
 *  "avatar": "http://wx.qlogo.cn/mmopen/vDwntJFbiaftDX3icEys8DiaKnHTzDDsibyVjSFDk6wiaCguLHmATZl9FkGWhJKmUlz04gWpgH6jkae7Rx1LkGy4TaBXMlYDUb1yC/0",
 *  "sex": 0,
 *  "language": "zh_CN",
 *  "country": {
 *    "label": "中国",
 *    "value": "CN"
 *  },
 *  "province": {
 *    "label": "湖南省",
 *    "value": "430000"
 *  },
 *  "city": {
 *    "label": "长沙市",
 *    "value": "430100"
 *  },
 *  "createdAt": "2017-10-09T14:45:01.061Z",
 *  "updatedAt": "2017-11-23T13:09:03.555Z",
 *  "type": 3,
 *  "note": "测试mm",
 *  "subscribe": true,
 *  "score": 0,
 *  "roles": [ 400, 200, 500 ]
 * }
 */
exports.fetchUserInfo = function (userId, callback) {
  if (!userId) throw new TypeError('userId must be a string');
  AV.Cloud.run('authRequestUserInfo', { userId: userId }).then(function (result) {
    callback(null, result);
  }).catch(function (error) {
    callback(error);
  });
};

/**
 * get valid score exchange promotion
 * @param {String} userId
 * @param {Function} callback 回调函数
 * Callback:
 * - err, 调用失败时得到的异常
 * - result, 调用正常时得到的对象
 * Result:
 * //结果示例
 * {
 *   "id":
 * }
 */
exports.fetchPromotion = function (userId, callback) {
  if (!userId) throw new TypeError('userId must be a string');
  AV.Cloud.run('promGetValidScoreExProm', { userId: userId }).then(function (result) {
    callback(null, result);
  }).catch(function (error) {
    callback(error);
  });
};

/**
 * exchange gift
 * @param {Object} params  积分兑换参数
 * @param {Function} callback 回调函数
 * params:
 * - userId, 用户id
 * - promotionId, 活动id
 * - giftId, 礼品id
 * - name, 礼品邮寄接收人姓名
 * - phone, 邮寄接收人联系电话
 * - addr， 邮寄地址
 * Callback:
 * - err, 调用失败时得到的异常
 * - result, 调用正常时得到的对象
 * Result:
 * //结果示例
 * {
 *  "promotion": {
 *  "__type": "Pointer",
 *  "className": "Promotion",
 *  "objectId": "5a0aae3aee920a0044355323"
 *  },
 *  "user": {
 *    "__type": "Pointer",
 *    "className": "_User",
 *    "objectId": "5a02f8e71579a300451c1f91"
 *  },
 *  "metadata": {
 *    "scores": 50,
 *    "gift": "watch",
 *    "name": "小明",
 *    "phone": "13712341234",
 *    "addr": "湖南省长沙市岳麓区"
 *  },
 *  "objectId": "5a1cdc2a128fe100469f6ecb",
 *  "createdAt": "2017-11-28T03:46:50.443Z",
 *  "updatedAt": "2017-11-28T03:46:50.443Z"
 * }
 */
exports.exchange = function (params, callback) {
  AV.Cloud.run('promExchangeGift', params).then(function (result) {
    callback(null, result);
  }).catch(function (error) {
    callback(error);
  });
};
