{
	"title": "東方鬼形獣 　～ Wily Beast and Weakest Creature",
	"formats": {
		"anm": "anm11",
		"msg": "msg11",
		"end": "end10"
	},
	"binhacks": {
		"th17_textbox_size": {
			"code": "6a00 51 e8[GetTextExtentForFontID] 83e81c 7302 31c0 f30f1097b4010000 f30f108fb0010000 8bcf 90909090909090",
			"title": "Correct text length calculation for the TH17 variety of Fairy Wars-style text boxes"
		},
		"spell_align": {
			"title": "Correctly align right-aligned text (TH16+)",
			"code": "ff7518 56 e8[GetTextExtentForFontID] 83c008 d1e0 89c6 8b442410 8b4c240c 8b542414 8b4c8808 8bc1 c1f808 8b9482ECFA8401 0fb6c1 8d0c40 8b8224010000 8b0cc8 8b451c 8d1400 89f0 8b742410 909090"
		}
	},
	"breakpoints": {
		"file_size": {
			"file_size": "eax",
			"file_name": "ebx",
			"cavesize": "5"
		},
		"file_load": {
			"file_buffer": "eax",
			"stack_clear_size": "8",
			"cavesize": "5"
		},
		"file_loaded": {
			"cavesize": "5"
		},
		"music_title": {
			"str": "edx",
			"track": "eax",
			"format_id": "Music Room Numbered Title",
			"cavesize": "5"
		},
		"music_cmt": {
			"str": "eax",
			"track": "[edi+0x6a8]",
			"line_num": "esi",
			"format_id": "Music Room Note Title",
			"cavesize": "5"
		},
		"gentext#trophy_result_desc": {
			"file": "trophy.js",
			"ids": ["edi", "ebx"],
			"line": "[ebp+8]",
			"str": "eax",
			"cavesize": 5
		},
		"gentext#trophy_result_nickname": {
			"file": "trophy.js",
			"ids": "ecx",
			"str": "eax",
			"cavesize": 5,
			"cave_exec": false
		},
		"gentext#trophy_ingame": {
			"file": "trophy.js",
			"ids": "esi",
			"str": "edx",
			"line": 0,
			"cavesize": 5,
			"cave_exec": false
		}
	},
	"tsa_font_block": {
		"offset": 4,
		"min": 0,
		"max": 8
	}
}