import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from ".";

// Typed dispatch lets components dispatch Redux actions without repeating AppDispatch.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Typed selector gives components strongly typed access to the Redux state tree.
export const useAppSelector = useSelector.withTypes<RootState>();
