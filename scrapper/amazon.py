import timeit

import regex as re
import requests
from bs4 import BeautifulSoup
from textblob import TextBlob


def scr(n=1, url=''):
    result = []
    base_url = re.findall('p/[A-Za-z0-9]+/', url)
    url_id = str(base_url[0]).split('/')[1]

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'}

    for i in range(1, n + 1):
        url_request = 'https://www.amazon.com/dp/product-reviews/' + url_id + '/ref=cm_cr_arp_d_paging_btm_+' + str(
            i) + '?ie=UTF8&reviewerType=all_reviews&pageNumber=' + str(i)

        r = requests.get(
            url_request, headers=headers)
        soup = BeautifulSoup(r.text, "html.parser")
        text = soup.findAll("span", attrs={'data-hook': 'review-body', 'class': 'a-size-base review-text'})
        result.extend(text)

    return result


start_time = timeit.default_timer()
url = "https://www.amazon.com/BLACK-DECKER-2-Liter-Stainless-HF110SBD/dp/B01DIQ817G/?pd_rd_wg=jtU4Z&pd_rd_r=aeb548ca-a9f7-4cb2-bbb7-8eed14e6c6b3&pd_rd_w=NSqNM&ref_=pd_gw_ri&pf_rd_r=R61PDZTRFRKHMPA2BFT2&pf_rd_p=c4cca1a8-3390-5a86-85a5-a7f9dab90877"
n = int(input("Enter Number of pages\t"))
comments = scr(n, url=url)

all_pol = []
for i in comments:
    _blob = TextBlob(i.getText())
    print(i.getText())
    _sent_pol = []
    _x = 0
    for sentence in _blob.sentences:
        if sentence.sentiment.polarity >= 0:
            _x = 1
        else:
            _x = -1

        _sent_pol.append(_x)
    if sum(_sent_pol) > 1:

        all_pol.append(1)
    else:
        all_pol.append(-1)

rate = (all_pol.count(1) * 5) / len(all_pol)
print(rate)
elapsed = timeit.default_timer() - start_time
print("Time : " + str(elapsed))
