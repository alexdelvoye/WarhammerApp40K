import { useDispatch, useSelector } from "react-redux";
import type { AddDispatch, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AddDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
