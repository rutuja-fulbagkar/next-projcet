import { createSlice } from '@reduxjs/toolkit';
import { findMaterial } from './materialApi';

const initialState = {
  data: [],
  skip: 0,
  limit: 10,
  totalRecords: 0,
  totalRecordsNoFilter: 0,
  currentPage: 0,
  status: 'idle',
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const materialSlice = createSlice({
  name: 'material',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
      state.status = 'idle';
    },
    setSkip: (state, action) => {
      state.skip = action.payload.skip;
      state.status = 'idle';
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.currentPage;
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(findMaterial.pending, (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.status = 'pending';
    });
    builder.addCase(findMaterial.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.totalRecords = action.payload?.totalRecords;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.status = 'succeeded';
    });
    builder.addCase(findMaterial.rejected, (state, _) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.status = 'failed';
    });
  },
});

export const { reset, setCurrentPage, setLimit, setSkip, setStatus } = materialSlice.actions;
export default materialSlice.reducer;
