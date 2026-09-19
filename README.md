# Multi-niche SEO sites

Apex domain: **toolfolio.page**

| Folder | Site | Live URL | Niche |
| --- | --- | --- | --- |
| `01-ai-tools` | Kiln | https://kiln.toolfolio.page | AI tools directory |
| `02-jobs` | Rolepaper | https://rolepaper.toolfolio.page | Tech / electrical jobs aggregator |
| `03-gaming-deals` | Floor Price | later | Gaming / gadget deals |

Each site is a separate Vercel project so one niche cannot take the other down.

## Name.com DNS (required)

Nameservers are currently Name.com (`ns1bcp.name.com` …). Add two CNAME records:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `kiln` | `cname.vercel-dns.com` |
| CNAME | `rolepaper` | `cname.vercel-dns.com` |

Do not point both sites at one Vercel project.
