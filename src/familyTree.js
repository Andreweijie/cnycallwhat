module.exports = {
  root: {
    name: "?",
    nextLevel: {
      olderBro: {
        name: "哥哥",
        nextLevel: {
          wife: { name: "嫂子" },
          son: { name: "侄子" },
          daughter: { name: "侄女" }
        }
      },
      olderSis: {
        name: "姐姐",
        nextLevel: {
          husband: { name: "姐夫" },
          son: { name: "外甥" },
          daughter: { name: "外甥女" }
        }
      },
      youngerBro: {
        name: "弟弟",
        nextLevel: {
          wife: { name: "弟妇" },
          son: { name: "侄子" },
          daughter: { name: "侄女" }
        }
      },
      youngerSis: {
        name: "妹妹",
        nextLevel: {
          husband: { name: "妹夫" },
          son: { name: "外甥" },
          daughter: { name: "外甥女" }
        }
      },
      father: {
        name: "爸爸",
        nextLevel: {
          father: {
            name: "爷爷",
            nextLevel: {
              father: { name: "曾祖父" },
              mother: { name: "曾祖母" },
              wife: { name: "奶奶" },
              olderBro: { name: "伯公", nextLevel: { wife: { name: "伯婆" } } },
              youngerBro: {
                name: "叔公",
                nextLevel: { wife: { name: "叔婆" } }
              },
              sister: { name: "姑婆" }
            }
          },
          mother: { name: "奶奶" },
          olderSis: {
            name: "姑妈",
            nextLevel: {
              husband: { name: "姑丈" },
              daughter: { name: "故表妹" }
            }
          },
          olderBro: {
            name: "伯伯",
            nextLevel: {
              wife: { name: "伯娘" },
              olderSon: { name: "堂兄" },
              youngerSon: { name: "堂弟" },
              olderDaughter: { name: "堂姐" },
              youngerDaughter: { name: "堂妹" }
            }
          },
          youngerBro: {
            name: "叔叔",
            nextLevel: {
              wife: { name: "婶婶" },
              son: {
                name: "堂弟",
                nextLevel: {
                  wife: { name: "堂弟妇" },
                  son: { name: "堂侄子" },
                  daughter: { name: "堂侄女" }
                }
              }
            }
          },
          youngerSis: {
            name: "姑姑",
            nextLevel: {
              husband: {
                name: "姑丈",
                nextLevel: {
                  olderDaughter: {
                    name: "姑表姐",
                    nextLevel: {
                      son: { name: "表侄子" },
                      daughter: { name: "表侄女" }
                    }
                  },
                  youngerDaughter: {
                    name: "姑表妹",
                    nextLevel: {
                      son: { name: "表侄子" },
                      daughter: { name: "表侄女" }
                    }
                  },
                  youngerSon: {
                    name: "姑表弟",
                    nextLevel: {
                      son: { name: "表侄子" },
                      daughter: { name: "表侄女" }
                    }
                  },
                  olderSon: {
                    name: "姑表哥",
                    nextLevel: {
                      son: { name: "表侄子" },
                      daughter: { name: "表侄女" },
                      wife: { name: "故表嫂" }
                    }
                  }
                }
              }
            }
          }
        }
      },
      mother: {
        name: "妈妈",
        nextLevel: {
          mother: { name: "外婆" },
          father: {
            name: "外公",
            nextLevel: {
              father: { name: "外曾祖父" },
              mother: { name: "外曾祖母" },
              olderBro: {
                name: "舅公",
                nextLevel: {
                  wife: { name: "舅婆" }
                }
              },
              youngerBro: {
                name: "舅公",
                nextLevel: {
                  wife: { name: "舅婆" }
                }
              },
              olderSis: {
                name: "姨婆",
                nextLevel: {
                  husband: { name: "姨丈公" }
                }
              },
              youngerSis: {
                name: "姨婆",
                nextLevel: {
                  husband: { name: "姨丈公" }
                }
              }
            }
          },
          olderSis: {
            name: "姨妈",
            nextLevel: {
              olderSon: { name: "表哥" },
              youngerSon: { name: "表弟" },
              olderDaughter: { name: "表姐" },
              youngerDaughter: { name: "表妹" }
            }
          },
          youngerSis: {
            name: "阿姨",
            nextLevel: {
              olderSon: { name: "表哥" },
              youngerSon: { name: "表弟" },
              olderDaughter: { name: "表姐" },
              youngerDaughter: { name: "表妹" }
            }
          },
          olderBro: {
            name: "舅舅",
            nextLevel: {
              olderSon: { name: "表哥" },
              youngerSon: { name: "表弟" },
              olderDaughter: { name: "表姐" },
              youngerDaughter: { name: "表妹" },
              wife: { name: "舅母" }
            }
          },
          youngerBro: {
            name: "舅舅",
            nextLevel: {
              olderSon: { name: "表哥" },
              youngerSon: { name: "表弟" },
              olderDaughter: { name: "表姐" },
              youngerDaughter: { name: "表妹" },
              wife: { name: "舅母" }
            }
          }
        }
      },
      husband: {
        name: "老公",
        nextLevel: {
          olderBro: { name: "大伯" },
          olderSis: { name: "大姑" },
          youngerBro: { name: "小叔" },
          youngerSis: { name: "小姑" },
          father: { name: "公公" },
          mother: { name: "婆婆" }
        }
      },
      wife: {
        name: "老婆",
        nextLevel: {
          father: { name: "岳父" },
          mother: { name: "岳母" },
          olderBro: { name: "大舅" },
          youngerBro: { name: "小舅" },
          olderSis: { name: "大姨" },
          youngerSis: { name: "小姨" }
        }
      },
      son: {
        name: "儿子",
        nextLevel: {
          wife: { name: "媳妇" },
          son: {
            name: "孙子",
            nextLevel: {
              wife: { name: "孙媳妇" },
              son: { name: "曾孙子" },
              daughter: { name: "曾孙女" }
            }
          },
          daughter: {
            name: "孙女",
            nextLevel: {
              husband: { name: "孙女婿" },
              son: { name: "增外孙子" },
              daughter: { name: "曾外孙女" }
            }
          }
        }
      },
      daughter: {
        name: "女儿",
        nextLevel: {
          husband: { name: "女婿" },
          son: {
            name: "外孙子",
            nextLevel: {
              wife: { name: "外孙媳妇" },
              son: { name: "外曾孙子" },
              daughter: { name: "外曾孙女" }
            }
          },
          daughter: {
            name: "外孙女",
            nextLevel: {
              husband: { name: "孙孙女婿" },
              son: { name: "重外孙子" },
              daughter: { name: "重外孙女" }
            }
          }
        }
      }
    }
  }
};
