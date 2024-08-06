import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const FormInput = ({
  type,
  label,
  value,
  onChange,
  options = [],
  error,
  helperText,
  disabled,
  displayEmpty,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (type === 'select') {
    return (
      <>
        <Select
          value={value}
          onChange={onChange}
          fullWidth
          error={!!error}
          displayEmpty={displayEmpty}
          disabled={disabled}
        >
          <MenuItem value="" disabled>
            {label}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
        {helperText && (
          <Typography variant="caption" color="error">
            {helperText}
          </Typography>
        )}
      </>
    );
  }

  return (
    <TextField
      label={label}
      type={type === 'password' && !showPassword ? 'password' : 'text'}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={helperText}
      InputProps={
        type === 'password' && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={togglePasswordVisibility}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default FormInput;
