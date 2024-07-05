import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs";
import {Button} from "../components/ui/button";
import {
  Select,
  SelectContent, SelectItem,
  SelectTrigger,
  SelectValue
} from "../components/ui/select";

export default function Setting() {
  return (
      <>
        <Tabs defaultValue="policy" className="w-[740px]">
          <TabsList className="grid w-[400px] grid-cols-3 bg-none ">
            <TabsTrigger value="policy">탐지정책</TabsTrigger>
            <TabsTrigger value="etc">기타설정</TabsTrigger>
            <TabsTrigger value="product">제품정보</TabsTrigger>
          </TabsList>
          <hr className="w-[800px]"/>
          <TabsContent value="policy">
            <main className="flex flex-col justify-start items-start m-3">
              <div className="m-1"></div>
              <div
                  className="flex flex-col rounded-lg border p-3 gap-1  h-[111px] justify-center md:w-full items-start bg-[#FFFFFF]">
                <div className="text-[13px] text-[#515151] font-bold">유해 콘텐츠 탐지
                  시
                </div>
                <div className="text-[12px] text-[#6D6D6D]">유해성 콘텐츠가 탐지되는 경우 아래와
                  같은 조치를 취합니다.
                </div>
                <div className="w-[240px] h-[34px]">
                  <Select>
                    <SelectTrigger className="col-span-5">
                      <SelectValue placeholder="콘텐츠 최소화"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Y">콘텐츠 최소화</SelectItem>
                      <SelectItem value="N">콘텐츠 최대화</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="m-1"></div>
              <div
                  className="flex flex-col rounded-lg border p-3 gap-1  h-[110px] justify-center md:w-full items-start bg-[#FFFFFF]">
                <div className="text-[13px] text-[#515151] font-bold">탐지정책
                </div>
                <div className="text-[12px] text-[#6D6D6D]">관리자에서 설정한 탐지 정책이 노출
                  됩니다. 탐지 정책 관리는 관리자에서만 가능합니다.
                </div>
                <div className="w-[240px] h-[34px]">
                  <Select>
                    <SelectTrigger className="col-span-5">
                      <SelectValue placeholder="중학교 정책 템플릿"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Y">초등학교 정책 템플릿</SelectItem>
                      <SelectItem value="Y1">중학교 정책 템플릿</SelectItem>
                      <SelectItem value="N">고등학교 정책 템플릿</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </main>
          </TabsContent>
          <TabsContent value="etc">
            <main className="flex flex-col justify-start items-start m-3">
              <div className="m-1"></div>
              <div
                  className="flex flex-col rounded-lg border p-3 gap-1  h-[111px] justify-center md:w-full items-start bg-[#FFFFFF]">
                <div className="text-[13px] text-[#515151] font-bold">실행설정
                </div>
                <div className="text-[12px] text-[#6D6D6D]">서비스가 실행되는 시점을 설정할 수
                  있습니다.
                </div>
                <div className="w-[240px] h-[34px]">
                  <Select>
                    <SelectTrigger className="col-span-5">
                      <SelectValue placeholder="윈도우 시작 시 자동 실행"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Y">윈도우 시작 시 자동 실행</SelectItem>
                      <SelectItem value="N">윈도우 시작 시 자동 중지</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="m-1"></div>
              <div
                  className="flex flex-col rounded-lg border p-3 gap-1  h-[110px] justify-center md:w-full items-start bg-[#FFFFFF]">
                <div className="text-[13px] text-[#515151] font-bold">알림설정
                </div>
                <div className="text-[12px] text-[#6D6D6D]">탐지 시 아래와 같은 조건으로 알림이
                  발송 됩니다.
                </div>
                <div className="w-[240px] h-[34px]">
                  <Select>
                    <SelectTrigger className="col-span-5">
                      <SelectValue placeholder="보호자에게 메시지 발송"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Y">보호자에게 메시지 발송</SelectItem>
                      <SelectItem value="N">선생님에게 메시지 발송</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="m-1"></div>
              <div
                  className="flex flex-col rounded-lg border p-3 gap-1  h-[111px] justify-center md:w-full items-start bg-[#FFFFFF]">
                <div className="text-[13px] text-[#515151] font-bold">검역소 파일
                  관리
                </div>
                <div className="text-[12px] text-[#6D6D6D]">아래 기간 동안 검역소에 파일이 보관
                  됩니다. (설정 기간이 지나면 오래된 항목 부터 자동으로 삭제 됩니다)
                </div>
                <div className="flex flex-row gap-2 ">
                  <div className="w-[240px] h-[34px]">
                    <Select>
                      <SelectTrigger className="col-span-5">
                        <SelectValue className="w-[240px] h-[34px]"
                                     placeholder="30일"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Y">30일</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="rounded-sm w-[100px] h-[34px]"><p
                      className="text-[12px] text-[#FFFFFF]">전체 항목 삭제</p>
                  </Button>
                </div>
              </div>
              <div className="m-1"></div>
              <div
                  className="flex flex-col rounded-lg border p-3 gap-1  h-[110px] justify-center md:w-full items-start bg-[#FFFFFF]">
                <div className="text-[13px] text-[#515151] font-bold">로그파일 관리
                  관리
                </div>
                <div className="text-[12px] text-[#6D6D6D]">아래 기간 동안 로그 파일이 보관 됩니다. (설정 기간이 지나면 오래된 항목 부터 자동으로 삭제 됩니다)
                </div>
                <div className="flex flex-row gap-2 ">
                  <div className="w-[240px] h-[34px]">
                    <Select>
                      <SelectTrigger className="col-span-5">
                        <SelectValue className="w-[240px] h-[34px]"
                                     placeholder="30일"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Y">30일</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="rounded-sm w-[100px] h-[34px]"><p
                      className="text-[12px] text-[#FFFFFF]">전체 항목 삭제</p>
                  </Button>
                </div>
              </div>
            </main>
          </TabsContent>
          <TabsContent value="product">
            <main className="flex flex-col items-center m-28 ml-12">
              <img alt="" src={require('../images/product.png')} />
              <div className="flex gap-2 text-[19px] mt-6"><p className="text-[#9D1F32] text-[19px] font-bold">MeerCat.ch </p><p className="text-[#515151]">Beta</p></div>
              <div className="text-[12px] text-[#8B8B8B] mt-1">제품버전 : 1.0.1</div>
              <div className="text-[12px] text-[#8B8B8B]">엔진버전 : 2024.04.08</div>
              <div className="flex flex-row gap-2 mt-10">
                <Button className="w-[150px] h-[34px]  hover:bg-neutral-400 bg-[#FFFFFF] rounded-sm"><p className="text-[12px] text-[#515151]">사용 약관</p></Button>
                <Button className="w-[150px] h-[34px]  hover:bg-neutral-400 bg-[#FFFFFF]"><p className="text-[12px] text-[#515151]">오픈소스 라이선스</p></Button>
                <Button className="w-[150px] h-[34px]  hover:bg-neutral-400 bg-[#FFFFFF]"><p className="text-[12px] text-[#515151]">개인정보처리방침</p></Button>
              </div>
            </main>
          </TabsContent>
        </Tabs>
      </>
  )
}