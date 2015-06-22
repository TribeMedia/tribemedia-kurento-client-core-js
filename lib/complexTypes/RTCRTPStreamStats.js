/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('tribemedia-kurento-client-js');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var RTCStats = require('./RTCStats');


/**
 * Statistics for the RTP stream
 *
 * @constructor module:core/complexTypes.RTCRTPStreamStats
 *
 * @property {external:String} ssrc
 *  The synchronized source SSRC
 * @property {external:String} associateStatsId
 *  The associateStatsId is used for looking up the corresponding (local/remote)
 * @property {external:Boolean} isRemote
 *  false indicates that the statistics are measured locally, while true 
 *  indicates that the measurements were done at the remote endpoint and 
 *  reported in an RTCP RR/XR.
 * @property {external:String} mediaTrackId
 *  Track identifier.
 * @property {external:String} transportId
 *  It is a unique identifier that is associated to the object that was 
 *  inspected to produce the RTCTransportStats associated with this RTP stream.
 * @property {external:String} codecId
 *  The codec identifier
 * @property {external:Integer} firCount
 *  Count the total number of Full Intra Request (FIR) packets received by the 
 *  sender. This metric is only valid for video and is sent by receiver.
 * @property {external:Integer} pliCount
 *  Count the total number of Packet Loss Indication (PLI) packets received by 
 *  the sender and is sent by receiver.
 * @property {external:Integer} nackCount
 *  Count the total number of Negative ACKnowledgement (NACK) packets received 
 *  by the sender and is sent by receiver.
 * @property {external:Integer} sliCount
 *  Count the total number of Slice Loss Indication (SLI) packets received by 
 *  the sender. This metric is only valid for video and is sent by receiver.
 * @property {external:Integer} remb
 *  The Receiver Estimated Maximum Bitrate (REMB). This metric is only valid for

 * @extends module:core.RTCStats
 */
function RTCRTPStreamStats(rTCRTPStreamStatsDict){
  if(!(this instanceof RTCRTPStreamStats))
    return new RTCRTPStreamStats(rTCRTPStreamStatsDict)

  // Check rTCRTPStreamStatsDict has the required fields
  checkType('String', 'rTCRTPStreamStatsDict.ssrc', rTCRTPStreamStatsDict.ssrc, {required: true});
  checkType('String', 'rTCRTPStreamStatsDict.associateStatsId', rTCRTPStreamStatsDict.associateStatsId, {required: true});
  checkType('boolean', 'rTCRTPStreamStatsDict.isRemote', rTCRTPStreamStatsDict.isRemote, {required: true});
  checkType('String', 'rTCRTPStreamStatsDict.mediaTrackId', rTCRTPStreamStatsDict.mediaTrackId, {required: true});
  checkType('String', 'rTCRTPStreamStatsDict.transportId', rTCRTPStreamStatsDict.transportId, {required: true});
  checkType('String', 'rTCRTPStreamStatsDict.codecId', rTCRTPStreamStatsDict.codecId, {required: true});
  checkType('int', 'rTCRTPStreamStatsDict.firCount', rTCRTPStreamStatsDict.firCount, {required: true});
  checkType('int', 'rTCRTPStreamStatsDict.pliCount', rTCRTPStreamStatsDict.pliCount, {required: true});
  checkType('int', 'rTCRTPStreamStatsDict.nackCount', rTCRTPStreamStatsDict.nackCount, {required: true});
  checkType('int', 'rTCRTPStreamStatsDict.sliCount', rTCRTPStreamStatsDict.sliCount, {required: true});
  checkType('int', 'rTCRTPStreamStatsDict.remb', rTCRTPStreamStatsDict.remb, {required: true});

  // Init parent class
  RTCRTPStreamStats.super_.call(this, rTCRTPStreamStatsDict)

  // Set object properties
  Object.defineProperties(this, {
    ssrc: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.ssrc
    },
    associateStatsId: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.associateStatsId
    },
    isRemote: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.isRemote
    },
    mediaTrackId: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.mediaTrackId
    },
    transportId: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.transportId
    },
    codecId: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.codecId
    },
    firCount: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.firCount
    },
    pliCount: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.pliCount
    },
    nackCount: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.nackCount
    },
    sliCount: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.sliCount
    },
    remb: {
      writable: true,
      enumerable: true,
      value: rTCRTPStreamStatsDict.remb
    }
  })
}
inherits(RTCRTPStreamStats, RTCStats)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(RTCRTPStreamStats.prototype, {
  __module__: {
    enumerable: true,
    value: "kurento"
  },
  __type__: {
    enumerable: true,
    value: "RTCRTPStreamStats"
  }
})

/**
 * Checker for {@link core/complexTypes.RTCRTPStreamStats}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.RTCRTPStreamStats} value
 */
function checkRTCRTPStreamStats(key, value)
{
  if(!(value instanceof RTCRTPStreamStats))
    throw ChecktypeError(key, RTCRTPStreamStats, value);
};


module.exports = RTCRTPStreamStats;

RTCRTPStreamStats.check = checkRTCRTPStreamStats;