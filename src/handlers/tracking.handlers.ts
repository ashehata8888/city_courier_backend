import { NextFunction, Request, Response } from "express";
import TrackingModel from "../models/tracking.model";

const trackingModel = new TrackingModel();

export const createTracking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const t = await trackingModel.createTracking(req.body);
    res.json({
      Message: ` tracking '${t.parcel_content}' was created successfully`,
      data: { ...t },
    });
  } catch (err) {
    next(err);
  }
};

export const getOneTracking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const t = await trackingModel.getOneTracking(req.params.id);
    res.json({
      Message: ` tracking '${t.parcel_content}' was retrieved successfully`,
      data: { ...t },
    });
  } catch (err) {
    next(err);
  }
};

export const getAllTrackingForOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const t = await trackingModel.getAllTrackingsForOneUser(req.params.id);
    res.json([...t]);
  } catch (err) {
    next(err);
  }
};

export const getAllTrackings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ts = await trackingModel.getAllTrackings();
    res.json([...ts]);
  } catch (err) {
    next(err);
  }
};

export const updateTracking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const t = await trackingModel.updateTracking(req.body);
    res.json({
      Message: ` '${t.parcel_content}' tracking  was updated successfully`,
      data: { ...t },
    });
  } catch (err) {
    next(err);
  }
};

export const deleteTracking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const t = await trackingModel.deleteTracking(
      req.params.id as unknown as string
    );
    res.json({
      Message: ` '${t.parcel_content}'  tracking was deleted successfully`,
      data: { ...t },
    });
  } catch (err) {
    next(err);
  }
};
