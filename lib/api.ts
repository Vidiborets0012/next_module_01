import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

// axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";
// axios.defaults.baseURL = "http://localhost:3000/api";

// Видаляємо стару логіку baseURL
// axios.defaults.baseURL = 'http://localhost:3000/api'

// Створюємо інстанс axios
const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // дозволяє axios працювати з cookie
});

// export const getNotes = async () => {
//   const res = await axios.get<NoteListResponse>("/notes");
//   return res.data;
// };

// export const getNotes = async (categoryId?: string) => {
//   const res = await axios.get<NoteListResponse>("/notes", {
//     params: { categoryId },
//   });
//   return res.data;
// };
export const getNotes = async (categoryId?: string) => {
  const res = await nextServer.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

// export const getSingleNote = async (id: string) => {
//   const res = await axios.get<Note>(`/notes/${id}`);
//   return res.data;
// };
export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
};

// export const getCategories = async () => {
//   const res = await axios<Category[]>("/categories");
//   return res.data;
// };
export const getCategories = async () => {
  const res = await nextServer<Category[]>("/categories");
  return res.data;
};

// export const createNote = async (data: NewNoteData) => {
//   const res = await axios.post<Note>("/notes", data);
//   return res.data;
// };
export const createNote = async (data: NewNoteData) => {
  const res = await nextServer.post<Note>("/notes", data);
  return res.data;
};

//Реєстрація – це POST-запит. Ми відправляємо дані, які користувач ввів у формі, а сервер створює новий обліковий запис і повертає нам об’єкт користувача.

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

// POST-запит на сервер – надсилаємо email і пароль, щоб перевірити, чи є такий акаунт. Якщо все добре, сервер створює сесію або токен і повертає його нам

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};
