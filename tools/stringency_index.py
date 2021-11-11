# %%
import pandas as pd
from datetime import datetime

# %%
d = pd.read_csv(
    'https://github.com/OxCGRT/covid-policy-tracker/blob/master/data/OxCGRT_latest.csv?raw=true')

# %%
d = d[d.CountryName == 'Czech Republic']

# %%
cdbk = {
    'C1_School closing': {
        2: 'require closing on some levels',
        3: 'require closing on all levels',
    },
    'C3_Cancel public events': {
        2: 'require cancellation',
    },
    'C4_Restrictions on gatherings': {
        1: 'restrictions 1000+',
        2: 'restrictions 100+',
        3: 'restrictions 11+',
        4: 'restricted all',
    },
    'C7_Restrictions on internal movement': {
        2: 'travel resticted',
    },
    'H6_Facial Coverings': {
        2: 'required on some places with people',
        3: 'required on all places with people',
        4: 'required everywhere',
    },
}

# %%


def repl(val, opts):
    if val in opts.keys():
        return opts[val]
    else:
        return val


for col in d.columns:
    if col in cdbk.keys():
        d[col] = d[col].apply(lambda x: repl(x, cdbk[col]))

# %%
d.Date = d.Date.apply(lambda x: datetime.strptime(
    str(x).split(' ')[0], '%Y%m%d'))
# %%
d[[
    'Date',
    'ConfirmedCases',
    'ConfirmedDeaths',
    'C1_School closing',
    'C3_Cancel public events',
    'C4_Restrictions on gatherings',
    'C7_Restrictions on internal movement',
    'H3_Contact tracing',
    'H6_Facial Coverings',
]].to_excel('omezeni.xlsx', index=False)
# %%

# %%
d
# %%
