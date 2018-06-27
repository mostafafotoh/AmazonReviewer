import regex as re

url = "https://www.amazon.com/Things-We-Dont-Say-Novel-ebook/dp/B077M3LP3G/ref=pd_rhf_cr_s_ts_0_3?_encoding=UTF8&pd_rd_i=B077M3LP3G&pd_rd_r=WSSHP5229H1NBM6KR3GR&pd_rd_w=P3S2S&pd_rd_wg=9czSS&psc=1&refRID=WSSHP5229H1NBM6KR3GR"

base_url = re.findall('p/[A-Za-z0-9]+/', url)
url_id = str(base_url[0]).split('/')[1]
u = 'https://www.amazon.com/dp/product-reviews/' + url_id + '/ref=cm_cr_arp_d_paging_btm_3?ie=UTF8&reviewerType=all_reviews&pageNumber=3'
print(u)
