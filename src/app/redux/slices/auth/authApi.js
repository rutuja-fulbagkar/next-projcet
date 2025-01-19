import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { api } from '../../../api';

export const findMaterial = createAsyncThunk(
  'material/findMaterial',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/api/construction/material/paginatedMaterial?search=${values?.search || ''}&limit=${values?.limit || 25
        }&page=${(values?.page ?? 0) + 1}`
      );
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'An unexpected error occurred');
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getMaterial = createAsyncThunk(
  'material/getMaterial',
  async (val, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/construction/material/${val}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const createMaterial = createAsyncThunk(
  'material/createMaterial',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/construction/material/create', values);
      if (response.status === 201) {
        toast.success(response?.data?.message);
      }
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const editMaterial = createAsyncThunk(
  'material/editMaterial',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/construction/material/edit/${values?.unitId}`, values?.formData);
      if (response.status === 200) {
        toast.success(response?.data?.message);
      }
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteMaterial = createAsyncThunk(
  'material/deleteMaterial',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/construction/material/delete/${id}`);
      if (response.status === 200) {
        toast.success(response?.data?.message);
      }
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
