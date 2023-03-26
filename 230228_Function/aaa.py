hk=1
print(hk);
hk="짱"
print(hk);

kdt={
  "삼백오호":"끝자락",
  "공욱재":"강사님"
}

print(kdt["공욱재"])

kdt_order=["우리는","개발자","입니다!"]
print(kdt_order[0],kdt_order[1],kdt_order[2])

for index in kdt_order:
  print(index)

def percent_calc(real_value,total_value):
  result = (real_value/total_value)*100
  return result

# 파이썬에선 ; 쓰면 에러남. 확인은 터미널에 python 파일명
# 작성법만 다르지 또옥같다.
# def : 정의하다. definition