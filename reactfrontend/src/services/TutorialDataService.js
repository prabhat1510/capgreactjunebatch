import http from '../http-common';
class TutorialDataService{
      getAll() {
          console.log("Inside get All method");
        return http.get("/tutorials");
      }
    
      get(id) {
        return http.get(`/tutorials/${id}`);
      }
    
      create(data) {
        return http.post("/tutorials/add", data);
      }
    
      update(id, data) {
        return http.put(`/tutorials/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/tutorials/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/tutorials`);
      }
    
      findByTitle(title) {
        return http.get(`/tutorials/byTitle/${title}`);
      }

      findByPublished(){
        return http.get(`/tutorials/published`);
      }
}

export default new TutorialDataService();