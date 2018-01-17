                <?php 
                        define('DB_HOST', '127.0.0.1');
                        define('DB_USERNAME', 'root');
                        define('DB_PASSWORD', 'root');
                        define('DB_NAME', 'iot_3');

                        //get connection
                        $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

                        if(!$mysqli){
                            die("Connection failed: " . $mysqli->error);
                        }
                        $query = sprintf("SELECT suhu, waktu, lembab_udara, lembab_tnh FROM rk WHERE id IN (SELECT MAX(id) FROM rk) ");

                        //execute query
                        $result = $mysqli->query($query);

                        if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            
                            if ($row["suhu"]>27) {

                                echo'<script type="text/javascript">',
                                     'function show_alert(){ alert("Ruangan terlalu panas !");     }',
                                     '</script>';
                                
                            }
                        }
                    }
                        ?>
