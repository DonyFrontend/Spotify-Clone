import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "src/app/providers/store/store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()