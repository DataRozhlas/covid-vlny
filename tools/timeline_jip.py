# %%
import pandas as pd
%matplotlib inline

# %%
hosp = pd.read_csv(
    'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/hospitalizace.csv')
# %%
ho = pd.DataFrame(hosp.groupby('datum').jip.sum()).reset_index()
ho.columns = ['datum', 'jip']

# %%
ho

# %%
h20 = ho[(ho.datum >= '2020-10-01') & (ho.datum <= '2020-12-31')]
h21 = ho[(ho.datum >= '2021-10-01') & (ho.datum <= '2021-11-11')]

# %%
# %%
h20.datum = h20.datum.apply(lambda x: '-'.join(x.split('-')[1:]))
h21.datum = h21.datum.apply(lambda x: '-'.join(x.split('-')[1:]))
# %%
oh = h20.merge(h21, on='datum', how='left')
# %%
oh.datum.apply(lambda x: str(
    int(x.split('-')[1])) + '. ' + str(int(x.split('-')[0])) + '.').to_clipboard()
# %%
oh.jip_x.to_clipboard()
# %%
oh
# %%
