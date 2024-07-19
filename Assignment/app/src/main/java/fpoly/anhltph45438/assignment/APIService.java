package fpoly.anhltph45438.assignment;


import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface APIService {

    String DOMAIN = "http://192.168.1.20:3000/";


    @GET("/api/list")
    Call<List<CarModel>> getCars();


}
