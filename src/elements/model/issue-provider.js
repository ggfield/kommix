"use strict";

Polymer({
	is: "issue-provider",
	properties: {
		_response: Object,
		series: {
			value: {
				name: "Moon Knight",
				volume: "4"
			}
		},
		params: {
			computed: "_computeParams(series)"
		},
		issues: {
			notify: true,
			computed: "_computeIssues(_response)"
		}
	},
	_computeParams: series =>
		({
			"order": "issue",
			"series": series.name,
			"volume": series.volume
		}),
	_computeIssues: response =>
		Array.from(response.comics.map(issue =>
				({
					id: issue.id,
					issueNumber: issue.issue,
					title: `${issue.series} #${issue.issue}`,
					series: issue.series,
					year: issue.year,
					pagecount: issue.page_count,
					lastreadPage: Number(issue.lastread_page)
				})
		))
});
