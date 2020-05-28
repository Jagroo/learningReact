UPDATE info SET (info_name, info_age, info_gender) = ($2,$3,$4) WHERE info_id=$1;
SELECT*FROM info;