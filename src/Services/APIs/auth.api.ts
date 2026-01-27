// All APIs related to authentication module will be placed here

import catchAsync from "../../Utils/catchAsync";
import axiosCustom from "../AxiosConfig/axiosCustom";

// Example API call
export const getUserProfile = catchAsync(async () => {
  const data = await axiosCustom.get(`/user-profile`);

  return data;
});
