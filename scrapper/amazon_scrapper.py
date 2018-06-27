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


def scrap_analyze(url, n):
    url = str(url)
    n = int(n)
    comments = scr(n, url=url)

    all_pol = []
    for i in comments:
        _blob = TextBlob(i.getText())
        _sent_pol = []
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
    return rate


# x = scrap_analyze(
#     url="https://www.amazon.com/Fire-Fury-Inside-Trump-White/dp/1250158060/ref=cm_cr_arp_d_pdt_img_top?ie=UTF8",
#     n=1)
#
# print(x)
