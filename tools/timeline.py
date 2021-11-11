# %%
import pandas as pd
%matplotlib inline
# %%
pripady = pd.read_csv(
    'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/osoby.csv')
# %%
hosp = pd.read_csv(
    'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/hospitalizace.csv')
# %%
hosp
# %%
pr = pd.DataFrame(pripady.datum.value_counts().sort_index()).reset_index()
pr.columns = ['datum', 'nakazeni']
# %%
r20 = pr[(pr.datum >= '2020-10-01') & (pr.datum <= '2020-12-31')]
r21 = pr[(pr.datum >= '2021-10-01') & (pr.datum <= '2021-11-11')]

# %%
# %%
r20.datum = r20.datum.apply(lambda x: '-'.join(x.split('-')[1:]))
r21.datum = r21.datum.apply(lambda x: '-'.join(x.split('-')[1:]))
# %%
r21
# %%
o = r20.merge(r21, on='datum', how='left')
# %%
o.datum.apply(lambda x: str(
    int(x.split('-')[1])) + '. ' + str(int(x.split('-')[0])) + '.').to_clipboard()
# %%
o.nakazeni_y.to_clipboard()
# %%
