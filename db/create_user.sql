insert into house_users(username,password)
values($1,$2)
returning *;