// coursePurchase.routes.js
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  createCheckoutSession,
  getAllPurchasedCourse,
  getCourseDetailWithPurchaseStatus,
    handleWebhook,
    verifyPayment,
} from "../controllers/coursePurchase.controller.js";

const router = express.Router();

router.route("/checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/verify-payment").post(isAuthenticated, verifyPayment);
router.route("/webhook").post(express.raw({ type: "application/json" }), handleWebhook);
router.route("/course/:courseId/detail-with-status").get(isAuthenticated, getCourseDetailWithPurchaseStatus);
router.route("/getPurchased-courses").get(isAuthenticated, getAllPurchasedCourse);

export default router;
