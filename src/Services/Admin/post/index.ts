import Cookies from "js-cookie";

export const add_new_post = async (formData: any) => {
    try {
        const res = await fetch(`/api/Admin/post/add-post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log('data in add new post (service) => ', data);
        return data;
    } catch (error) {
        console.log('Error in Adding a new post (service) =>', error);
    }
  }

  export const get_all_posts = async () => {
    try {
      const res = await fetch('/api/Admin/post/get-all-posts', {
        method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Cookies.get('token')}`
          },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log('Error in getting all orders (service) =>', error)
    }
  }

  export const upload_to_s3 = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch(`/api/s3upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: formData,
        });

        const data = await res.json();
        console.log('file uploaded to s3', data);
        return data;
    } catch (error) {
        console.log('Error in uploading file to s3 =>', error);
    }
  };