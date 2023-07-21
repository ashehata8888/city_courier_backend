"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTracking = exports.updateTrackingDeliveryTime = exports.updateTrackingPickedTime = exports.updateTracking = exports.getAllTrackings = exports.getAllTrackingForOneUser = exports.getOneTracking = exports.createTracking = void 0;
const tracking_model_1 = __importDefault(require("../models/tracking.model"));
const trackingModel = new tracking_model_1.default();
const createTracking = async (req, res, next) => {
    try {
        const t = await trackingModel.createTracking(req.body);
        res.json({
            Message: ` tracking '${t.parcel_content}' was created successfully`,
            data: { ...t },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.createTracking = createTracking;
const getOneTracking = async (req, res, next) => {
    try {
        const t = await trackingModel.getOneTracking(req.params.id);
        res.json({
            Message: ` tracking '${t.parcel_content}' was retrieved successfully`,
            data: { ...t },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.getOneTracking = getOneTracking;
const getAllTrackingForOneUser = async (req, res, next) => {
    try {
        const t = await trackingModel.getAllTrackingsForOneUser(req.params.id);
        res.json([...t]);
    }
    catch (err) {
        next(err);
    }
};
exports.getAllTrackingForOneUser = getAllTrackingForOneUser;
const getAllTrackings = async (req, res, next) => {
    try {
        const ts = await trackingModel.getAllTrackings();
        res.json([...ts]);
    }
    catch (err) {
        next(err);
    }
};
exports.getAllTrackings = getAllTrackings;
const updateTracking = async (req, res, next) => {
    try {
        const t = await trackingModel.updateTracking(req.body);
        res.json({
            Message: ` '${t.parcel_content}' tracking  was updated successfully`,
            data: { ...t },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateTracking = updateTracking;
const updateTrackingPickedTime = async (req, res, next) => {
    try {
        const track = await trackingModel.updatePicked_up_time(req.body);
        res.json({
            Message: ` the picked up time was updated successfully`,
            data: { ...track }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateTrackingPickedTime = updateTrackingPickedTime;
const updateTrackingDeliveryTime = async (req, res, next) => {
    try {
        const track = await trackingModel.updateDelivery_time(req.body);
        res.json({
            Message: ` the devliery time was updated successfully`,
            data: { ...track }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateTrackingDeliveryTime = updateTrackingDeliveryTime;
const deleteTracking = async (req, res, next) => {
    try {
        const t = await trackingModel.deleteTracking(req.params.id);
        res.json({
            Message: ` '${t.parcel_content}'  tracking was deleted successfully`,
            data: { ...t },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.deleteTracking = deleteTracking;
