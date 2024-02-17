import {useEffect, useState} from 'react';
import {axiosInstance} from '../../common/axios';

const useCoursesController = () => {
  const [courses, setCourses] = useState();

  const getCourses = async () => {
    try {
      const res = await axiosInstance.get('get-data');
      setCourses(res.data);
    } catch (err) {
      console.log(err.response);
      setCourses(err.response.data);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return {courses, getCourses};
};

export default useCoursesController;
