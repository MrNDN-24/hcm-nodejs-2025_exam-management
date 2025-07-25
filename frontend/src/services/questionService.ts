import api from "../api/apiClient";
import type {
  CreateQuestionFormValues,
  UpdateQuestionFormValues,
  QuestionResponse,
  QuestionResponseAll,
  DeleteQuestionResponse,
  QuestionStatsResponse,
} from "../types/question.type";
import { handleAxiosError } from "../utils/handleError";

export const getAllQuestions = async (params?: {
  subject_id?: number;
  question_type?: string;
  question_text?: string;
  creator_id?: number;
}): Promise<QuestionResponseAll> => {
  try {
    const res = await api.get("/questions", { params });
    return res.data;
  } catch (err) {
    throw handleAxiosError(err, "question.fetch_all_failed");
  }
};

export const getQuestionById = async (
  id: number
): Promise<QuestionResponse> => {
  try {
    const res = await api.get(`/questions/${id}`);
    return res.data;
  } catch (err) {
    throw handleAxiosError(err, "question.fetch_one_failed");
  }
};

export const createQuestion = async (
  data: CreateQuestionFormValues
): Promise<QuestionResponse> => {
  try {
    const res = await api.post("/questions", data);
    return res.data;
  } catch (err) {
    throw handleAxiosError(err, "question.create_failed");
  }
};

export const updateQuestion = async (
  id: number,
  data: UpdateQuestionFormValues
): Promise<QuestionResponse> => {
  try {
    const res = await api.put(`/questions/${id}`, data);
    return res.data;
  } catch (err) {
    throw handleAxiosError(err, "question.update_failed");
  }
};

export const deleteQuestion = async (
  id: number
): Promise<DeleteQuestionResponse> => {
  try {
    const res = await api.delete(`/questions/${id}`);
    return res.data;
  } catch (err) {
    throw handleAxiosError(err, "question.delete_failed");
  }
};

export const getQuestionStats = async (
  subjectId: number
): Promise<QuestionStatsResponse> => {
  try {
    const res = await api.get(`/questions/stats/${subjectId}`);
    return res.data;
  } catch (err) {
    throw handleAxiosError(err, "question.stats_failed");
  }
};
