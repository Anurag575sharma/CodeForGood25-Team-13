import appRes from "../utils/appRes.js";
import { registerWomanService, getAttendanceWoman, markAttendanceWomen, getWomenService, updateWomanService } from "../services/women.service.js";

export const registerWomanController = async (req, res) => {
    const result = await registerWomanService(req.body);
    if (!result.success) return res.status(400).json(result);
    res.status(201).json(result);
};

export const getWomenController = async (req, res) => {
    const result = await getWomenService(req.query);
    if (!result.success) return res.status(400).json(result);
    res.status(200).json(result);
};

export const markAttendanceWomenController = async (req, res) => {
    const result = await markAttendanceWomen(req.body);
    if (!result.success) return res.status(400).json(result);
    res.status(200).json(result);
};

export const getAttendanceWomenController = async (req, res) => {
    const result = await getAttendanceWoman(req.query);
    if (!result.success) return res.status(404).json(result);
    res.status(200).json(result);
};

export const updateWomanController = async (req, res) => {
    const result = await updateWomanService(req.params.womanId, req.body);
    if (!result.success) return res.status(400).json(result);
    res.status(200).json(result);
};

